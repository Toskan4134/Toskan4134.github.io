import { createContext, useContext } from 'react';

export const LanguageContext = createContext(null);
export const useLang = () => useContext(LanguageContext);

export const detectLang = () =>
    localStorage.getItem('lang') ??
    (navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en');

// Resuelve un valor bilingüe { es, en }; los strings planos pasan tal cual
export const L = (value, lang) =>
    value && typeof value === 'object' && !Array.isArray(value)
        ? value[lang] ?? value.es
        : value;

// 35 -> "2 años y 11 meses" / "2 yrs 11 mos"
export const formatDuration = (months, lang) => {
    const es = lang === 'es';
    const y = Math.floor(months / 12);
    const m = months % 12;
    const parts = [];
    if (y) parts.push(`${y} ${es ? (y === 1 ? 'año' : 'años') : y === 1 ? 'yr' : 'yrs'}`);
    if (m) parts.push(`${m} ${es ? (m === 1 ? 'mes' : 'meses') : m === 1 ? 'mo' : 'mos'}`);
    if (!parts.length) return es ? 'recién empezado' : 'just started';
    return parts.join(es ? ' y ' : ' ');
};

export const ui = {
    nav: {
        skills: { es: 'Habilidades', en: 'Skills' },
        projects: { es: 'Proyectos', en: 'Projects' },
        experience: { es: 'Experiencia', en: 'Experience' },
        education: { es: 'Formación', en: 'Education' },
        contact: { es: 'Contacto', en: 'Contact' },
    },
    hero: {
        badge: {
            es: 'Disponible para nuevos retos',
            en: 'Open to new challenges',
        },
        greeting: { es: '👋 Hola, soy', en: "👋 Hi, I'm" },
        roles: {
            es: [
                'Desarrollador Full Stack',
                'Creador de mods y plugins',
                'Entusiasta de la IA',
            ],
            en: [
                'Full Stack Developer',
                'Mod & plugin creator',
                'AI enthusiast',
            ],
        },
        description: {
            es: 'Apasionado por aprender cosas nuevas y construir herramientas que la gente usa de verdad.',
            en: 'Passionate about learning new things and building tools people actually use.',
        },
        contactMe: { es: 'Contáctame', en: 'Contact me' },
        viewProjects: { es: 'Ver proyectos', en: 'View projects' },
    },
    skills: {
        title: { es: 'Habilidades', en: 'Skills' },
        search: { es: 'Buscar habilidades...', en: 'Search skills...' },
        all: { es: 'Todas', en: 'All' },
        result: { es: 'habilidad encontrada', en: 'skill found' },
        results: { es: 'habilidades encontradas', en: 'skills found' },
        empty: {
            es: 'No hay resultados para tu búsqueda',
            en: 'No results for your search',
        },
        emptyHint: {
            es: 'Prueba con otra tecnología (o dame tiempo para aprenderla 😄)',
            en: 'Try another tech (or give me time to learn it 😄)',
        },
        showMore: { es: 'Mostrar más', en: 'Show more' },
        showLess: { es: 'Mostrar menos', en: 'Show less' },
        levels: {
            1: { es: 'Básico', en: 'Basic' },
            2: { es: 'Intermedio', en: 'Intermediate' },
            3: { es: 'Avanzado', en: 'Advanced' },
            4: { es: 'Experto', en: 'Expert' },
        },
    },
    projects: {
        title: { es: 'Proyectos', en: 'Projects' },
        featured: { es: 'Destacado', en: 'Featured' },
        viewMore: { es: 'Ver más en GitHub', en: 'See more on GitHub' },
    },
    experience: {
        title: { es: 'Experiencia', en: 'Experience' },
    },
    education: {
        title: { es: 'Formación y Logros', en: 'Education & Achievements' },
        education: { es: 'Educación', en: 'Education' },
        certs: {
            es: 'Certificaciones y Premios',
            en: 'Certifications & Awards',
        },
    },
    contact: {
        title: { es: 'Contacto', en: 'Contact' },
        blurb: {
            es: '¿Tienes un proyecto en mente o simplemente quieres saludar? Escríbeme.',
            en: 'Got a project in mind or just want to say hi? Drop me a line.',
        },
    },
    footer: {
        rights: {
            es: 'Todos los derechos reservados.',
            en: 'All rights reserved.',
        },
        made: {
            es: 'Hecho con ⚛️ React y mucho ☕',
            en: 'Made with ⚛️ React and lots of ☕',
        },
        hint: 'Psst... ↑ ↑ ↓ ↓ ← → ← → B A',
    },
    konami: {
        es: '🕶️ Bienvenido a la Matrix',
        en: '🕶️ Welcome to the Matrix',
    },
};
