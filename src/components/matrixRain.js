import { useEffect, useRef, useState } from 'react';

const CHARS = 'アィウエオカキクケコサシスセソタチツテトナニヌネノ01<>/{}[]=+*#$';
const COL_WIDTH = 18;

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
        };
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

            const drops = dropsRef.current;
            let falling = false;
            drops.forEach((y, i) => {
                if (y === null) return;
                if (!activeRef.current && y < 0) {
                    drops[i] = null;
                    return;
                }
                falling = true;
                ctx.fillStyle = Math.random() < 0.1 ? '#b3e5ff' : '#00aaff';
                ctx.fillText(
                    CHARS[Math.floor(Math.random() * CHARS.length)],
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
