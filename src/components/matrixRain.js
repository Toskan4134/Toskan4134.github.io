import { useEffect, useRef, useState } from 'react';

const CHARS = 'アィウエオカキクケコサシスセソタチツテトナニヌネノ01<>/{}[]=+*#$';
const COL_WIDTH = 18;
const MASK_SRC = `${process.env.PUBLIC_URL}/logo.png`;
const MASK_SCALE = 0.6; // proporción del lado corto de la ventana
const MASK_CHURN = 40; // 1/40 de los glifos del logo se renuevan por frame
const randChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

// active=false deja de generar gotas; las visibles terminan de caer y,
// cuando la estela se desvanece, se llama a onDone para desmontar el canvas
const MatrixRain = ({ active, onDone }) => {
    const canvasRef = useRef(null);
    const dropsRef = useRef([]);
    const activeRef = useRef(active);
    const onDoneRef = useRef(onDone);
    const [fading, setFading] = useState(false);
    activeRef.current = active;
    onDoneRef.current = onDone;

    useEffect(() => {
        if (active) {
            setFading(false);
            dropsRef.current = dropsRef.current.map((y) =>
                y === null ? Math.floor(Math.random() * -40) : y
            );
        }
    }, [active]);

    useEffect(() => {
        if (!fading) return;
        const timer = setTimeout(() => onDoneRef.current?.(), 1000);
        return () => clearTimeout(timer);
    }, [fading]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let raf;
        let last = 0;
        let doneAt = null;
        let mask = null; // capa offscreen con los glifos del logo
        let brights = []; // 0..1 por columna: cuánto queda del destello

        const paintCell = (c, r, ch) => {
            const x = c * COL_WIDTH;
            const y = r * COL_WIDTH;
            mask.chars[r * mask.cols + c] = ch;
            mask.ctx.clearRect(x, y - COL_WIDTH, COL_WIDTH, COL_WIDTH + 4);
            mask.ctx.fillStyle = Math.random() < 0.15 ? '#b3e5ff' : '#00aaff';
            mask.ctx.fillText(ch, x, y);
        };

        // Rasteriza la silueta del logo a la rejilla de la lluvia: guarda el
        // carácter de cada celda para que la gota que pase reutilice ese mismo
        // glifo en vez de superponer otro distinto
        const buildMask = () => {
            mask = null;
            if (!maskImg.complete || !maskImg.naturalWidth) return;
            const off = document.createElement('canvas');
            off.width = canvas.width;
            off.height = canvas.height;
            const octx = off.getContext('2d');
            const size =
                (Math.min(canvas.width, canvas.height) * MASK_SCALE) /
                Math.max(maskImg.naturalWidth, maskImg.naturalHeight);
            const w = maskImg.naturalWidth * size;
            const h = maskImg.naturalHeight * size;
            octx.drawImage(
                maskImg,
                (canvas.width - w) / 2,
                (canvas.height - h) / 2,
                w,
                h
            );
            const { data } = octx.getImageData(0, 0, off.width, off.height);
            octx.clearRect(0, 0, off.width, off.height);
            octx.font = '15px monospace';

            const cols = Math.ceil(canvas.width / COL_WIDTH);
            const rows = Math.ceil(canvas.height / COL_WIDTH);
            mask = { canvas: off, ctx: octx, cols, chars: [], cells: [] };
            for (let c = 0; c < cols; c++) {
                for (let r = 1; r < rows; r++) {
                    const px =
                        (r * COL_WIDTH * canvas.width + c * COL_WIDTH) * 4;
                    if (data[px + 3] <= 60) continue;
                    mask.cells.push([c, r]);
                    paintCell(c, r, randChar());
                }
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            dropsRef.current = Array.from(
                { length: Math.ceil(canvas.width / COL_WIDTH) },
                () =>
                    activeRef.current
                        ? Math.floor(Math.random() * -40)
                        : null
            );
            brights = dropsRef.current.map(() => 0);
            buildMask();
        };
        const maskImg = new Image();
        maskImg.onload = buildMask;
        maskImg.src = MASK_SRC;
        resize();
        window.addEventListener('resize', resize);

        const draw = (time) => {
            raf = requestAnimationFrame(draw);
            if (time - last < 50) return;
            last = time;
            // Desvanece el frame anterior sin perder la transparencia del canvas
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'source-over';
            ctx.font = '15px monospace';

            // El logo se repinta entero cada frame, así nunca se desvanece
            if (activeRef.current && mask) {
                for (let n = mask.cells.length / MASK_CHURN; n > 0; n--) {
                    const [c, r] =
                        mask.cells[(Math.random() * mask.cells.length) | 0];
                    paintCell(c, r, randChar());
                }
                ctx.drawImage(mask.canvas, 0, 0);
            }

            const drops = dropsRef.current;
            let falling = false;
            drops.forEach((y, i) => {
                if (y === null) return;
                if (!activeRef.current && y < 0) {
                    drops[i] = null;
                    return;
                }
                falling = true;
                const inMask =
                    mask && y >= 0 ? mask.chars[y * mask.cols + i] : null;
                // Al cruzar el logo la gota se enciende y luego se apaga sola
                brights[i] = inMask ? 1 : brights[i] * 0.85;
                const b = brights[i];
                ctx.fillStyle =
                    b > 0.02
                        ? `rgb(${(255 * b) | 0}, ${(170 + 85 * b) | 0}, 255)`
                        : Math.random() < 0.1
                        ? '#b3e5ff'
                        : '#00aaff';
                ctx.fillText(
                    inMask || randChar(),
                    i * COL_WIDTH,
                    y * COL_WIDTH
                );
                if (y * COL_WIDTH > canvas.height) {
                    drops[i] = activeRef.current
                        ? Math.random() > 0.975
                            ? 0
                            : y + 1
                        : null;
                } else {
                    drops[i] = y + 1;
                }
            });

            if (falling || activeRef.current) {
                doneAt = null;
            } else if (doneAt === null) {
                doneAt = time;
            } else if (time - doneAt > 800) {
                // El loop sigue vivo durante el fade por si reactivan el konami
                setFading(true);
            }
        };
        raf = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
                fading ? 'opacity-0' : 'opacity-40 dark:opacity-60'
            }`}
        />
    );
};

export default MatrixRain;
