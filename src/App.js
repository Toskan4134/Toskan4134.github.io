import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import MatrixRain from './components/matrixRain';
import Projects from './components/projects';
import Skills from './components/skills';
import { detectLang, L, LanguageContext, ui } from './lib/i18n';

const KONAMI = 'arrowup,arrowup,arrowdown,arrowdown,arrowleft,arrowright,arrowleft,arrowright,b,a';

function useKonami() {
    const [active, setActive] = useState(false);
    useEffect(() => {
        let sequence = [];
        const onKey = (e) => {
            sequence = [...sequence, e.key.toLowerCase()].slice(-10);
            if (sequence.join() === KONAMI) {
                setActive((prev) => !prev);
                sequence = [];
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);
    return active;
}

const Section = ({ id, title, children }) => (
    <motion.section
        id={id}
        className='py-8 md:py-14 scroll-mt-16'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        <motion.h2
            className='text-3xl font-bold'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
        >
            {title}
        </motion.h2>
        <motion.div
            className='mt-2 mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/30'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ originX: 0 }}
        />
        {children}
    </motion.section>
);

function App() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') ?? 'dark'
    );
    const [lang, setLang] = useState(detectLang);
    const konamiActive = useKonami();
    const [rainMounted, setRainMounted] = useState(false);
    const t = (value) => L(value, lang);

    useEffect(() => {
        if (konamiActive) setRainMounted(true);
    }, [konamiActive]);

    useEffect(() => localStorage.setItem('theme', theme), [theme]);
    useEffect(() => {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 125,
        damping: 45,
        restDelta: 0.001,
    });

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            <div
                className={`App ${theme} flex flex-col items-center bg-background text-foreground`}
            >
                {rainMounted && (
                    <MatrixRain
                        active={konamiActive}
                        onDone={() => setRainMounted(false)}
                    />
                )}
                <motion.div
                    className='fixed top-0 left-0 right-0 h-1 bg-primary z-50'
                    style={{ scaleX, originX: 0 }}
                />
                <Header theme={theme} setTheme={setTheme} />
                <main className='container py-6 max-w-[1200px] px-4 overflow-x-clip'>
                    <motion.section
                        id='hero'
                        className='py-8 md:py-14'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Hero />
                    </motion.section>
                    <Section id='skills' title={t(ui.skills.title)}>
                        <Skills />
                    </Section>
                    <Section id='projects' title={t(ui.projects.title)}>
                        <Projects />
                    </Section>
                    <Section id='experience' title={t(ui.experience.title)}>
                        <Experience />
                    </Section>
                    <Section id='education' title={t(ui.education.title)}>
                        <Education />
                    </Section>
                    <Section id='contact' title={t(ui.contact.title)}>
                        <Contact />
                    </Section>
                </main>
                <footer className='border-t py-6 w-full flex justify-center'>
                    <Footer />
                </footer>
                {konamiActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='fixed bottom-4 right-4 z-50 rounded-lg border border-primary bg-background/90 px-4 py-2 text-sm shadow-[0_0_15px_rgba(0,170,255,0.5)]'
                    >
                        {t(ui.konami)}
                    </motion.div>
                )}
            </div>
        </LanguageContext.Provider>
    );
}

export default App;
