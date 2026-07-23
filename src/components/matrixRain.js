import GlyphRain from 'glyph-rain';
import { useEffect, useRef, useState } from 'react';

// active=false deja de generar gotas; las visibles terminan de caer y borran el
// logo, y al quedarse vacío (onIdle) se funde y se llama a onDone para desmontar
const MatrixRain = ({ active, onDone }) => {
    const canvasRef = useRef(null);
    const rainRef = useRef(null);
    const onDoneRef = useRef(onDone);
    const [fading, setFading] = useState(false);
    onDoneRef.current = onDone;

    useEffect(() => {
        const rain = new GlyphRain({
            canvas: canvasRef.current,
            autoStart: false,
            glyph: { src: `${process.env.PUBLIC_URL}/logo.png`, scale: 0.6 },
            // la lluvia va atenuada para que el logo destaque sobre ella
            color: {
                from: '#00aaff',
                to: '#8ad6ff',
                rainOpacity: 0.5,
                glyphOpacity: 1,
            },
            // ajustado al original: 20 símbolos/s a 20 fps = una celda por tick
            fps: 20,
            cellSize: 18,
            animation: {
                direction: 'down',
                speed: { value: 20, random: 0.2 },
                length: { value: 0.4, random: 0.3 },
                gap: { value: 0.8, random: 0.5 },
                churn: { value: 0.5, random: 0.6 },
            },
            onIdle: () => setFading(true),
        });
        rainRef.current = rain;
        return () => rain.destroy();
    }, []);

    useEffect(() => {
        if (!active) return rainRef.current.stop();
        setFading(false);
        rainRef.current.start();
    }, [active]);

    useEffect(() => {
        if (!fading) return;
        const timer = setTimeout(() => onDoneRef.current?.(), 1000);
        return () => clearTimeout(timer);
    }, [fading]);

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
