// Todo el contenido del portfolio vive aquí: añade objetos a estas listas
// y la web se actualiza sola. Los textos admiten string plano o { es, en }.

export const skillCategories = [
    { id: 'frontend', label: { es: 'Frontend', en: 'Frontend' } },
    { id: 'backend', label: { es: 'Backend', en: 'Backend' } },
    { id: 'data', label: { es: 'Datos', en: 'Data' } },
    { id: 'devops', label: { es: 'DevOps', en: 'DevOps' } },
    { id: 'tools', label: { es: 'Herramientas', en: 'Tools' } },
];

export const skills = [
    {
        name: 'JavaScript',
        level: 4,
        category: 'frontend',
        related: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript'],
        tags: ['web', 'frontend', 'backend', 'programming'],
        aliases: ['js', 'ecmascript'],
    },
    {
        name: 'TypeScript',
        level: 3,
        category: 'frontend',
        related: ['JavaScript', 'React', 'Next.js'],
        tags: ['web', 'frontend', 'backend', 'programming'],
        aliases: ['ts'],
    },
    {
        name: 'HTML',
        level: 3,
        category: 'frontend',
        related: ['CSS', 'JavaScript', 'React', 'Next.js', 'Vue.js'],
        tags: ['web', 'frontend', 'markup'],
        aliases: ['html5'],
    },
    {
        name: 'CSS',
        level: 3,
        category: 'frontend',
        related: ['HTML', 'Tailwind', 'React', 'Next.js', 'Vue.js'],
        tags: ['web', 'frontend', 'styling', 'design'],
        aliases: ['css3', 'stylesheets'],
    },
    {
        name: 'React',
        level: 3,
        category: 'frontend',
        related: ['JavaScript', 'Next.js', 'HTML', 'CSS', 'Tailwind'],
        tags: ['web', 'frontend', 'javascript', 'framework', 'ui'],
        aliases: ['reactjs', 'react.js'],
    },
    {
        name: 'Next.js',
        level: 3,
        category: 'frontend',
        related: ['React', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Tailwind'],
        tags: ['web', 'frontend', 'backend', 'fullstack', 'framework'],
        aliases: ['nextjs', 'next'],
    },
    {
        name: 'Vue.js',
        level: 2,
        category: 'frontend',
        related: ['JavaScript', 'HTML', 'CSS', 'Tailwind'],
        tags: ['web', 'frontend', 'javascript', 'framework', 'ui'],
        aliases: ['vue', 'vuejs'],
    },
    {
        name: 'Tailwind',
        level: 2,
        category: 'frontend',
        related: ['CSS', 'React', 'Next.js', 'Vue.js', 'HTML'],
        tags: ['web', 'frontend', 'css', 'styling', 'design', 'framework'],
        aliases: ['tailwindcss', 'tailwind css'],
    },
    {
        name: 'Node.js',
        level: 3,
        category: 'backend',
        related: ['JavaScript', 'MongoDB', 'Next.js'],
        tags: ['backend', 'javascript', 'server', 'web'],
        aliases: ['node', 'nodejs'],
    },
    {
        name: 'Java',
        level: 3,
        category: 'backend',
        related: ['Spring Boot', 'Spring Cloud', 'Android Studio', 'Keycloak'],
        tags: ['backend', 'programming', 'oop', 'enterprise'],
        aliases: ['jdk', 'jvm'],
    },
    {
        name: 'Spring Boot',
        level: 2,
        category: 'backend',
        related: ['Java', 'Spring Cloud', 'Docker'],
        tags: ['backend', 'java', 'framework', 'web', 'api'],
        aliases: ['springboot', 'spring'],
    },
    {
        name: 'Spring Cloud',
        level: 2,
        category: 'backend',
        related: ['Java', 'Spring Boot', 'Docker'],
        tags: ['backend', 'java', 'microservices', 'cloud'],
        aliases: ['springcloud'],
    },
    {
        name: 'C#',
        level: 2,
        category: 'backend',
        related: ['ASP.NET', 'Unity'],
        tags: ['backend', 'programming', 'oop', 'microsoft', 'game'],
        aliases: ['csharp', 'c sharp'],
    },
    {
        name: 'ASP.NET',
        level: 2,
        category: 'backend',
        related: ['C#'],
        tags: ['backend', 'web', 'framework', 'microsoft'],
        aliases: ['asp.net core', 'aspnet', 'dotnet'],
    },
    {
        name: 'Ruby',
        level: 2,
        category: 'backend',
        related: [],
        tags: ['backend', 'programming', 'gamedev', 'rgss'],
        aliases: ['ruby on rails', 'rails', 'rgss'],
    },
    {
        name: 'PHP / Laravel',
        level: 1,
        category: 'backend',
        related: ['MySQL / PostgreSQL', 'WordPress'],
        tags: ['backend', 'web', 'programming', 'framework'],
        aliases: ['php', 'laravel'],
    },
    {
        name: 'Python',
        level: 1,
        category: 'backend',
        related: ['R', 'Weka'],
        tags: ['programming', 'data-science', 'backend', 'ai', 'ml'],
        aliases: ['py'],
    },
    {
        name: 'Rust',
        level: 1,
        category: 'backend',
        related: ['Tauri'],
        tags: ['programming', 'systems', 'desktop'],
        aliases: ['rustlang'],
    },
    {
        name: 'Keycloak',
        level: 1,
        category: 'backend',
        related: ['Java', 'Spring Boot'],
        tags: ['backend', 'security', 'authentication', 'java'],
        aliases: [],
    },
    {
        name: 'MongoDB',
        level: 3,
        category: 'data',
        related: ['Node.js', 'JavaScript'],
        tags: ['database', 'backend', 'nosql', 'data', 'db'],
        aliases: ['mongo'],
    },
    {
        name: 'MySQL / PostgreSQL',
        level: 2,
        category: 'data',
        related: ['Java', 'Spring Boot', 'Node.js', 'PHP / Laravel'],
        tags: ['database', 'backend', 'sql', 'data', 'db'],
        aliases: ['mysql', 'postgresql', 'postgres'],
    },
    {
        name: 'R',
        level: 1,
        category: 'data',
        related: ['Python', 'Weka'],
        tags: ['data-science', 'statistics', 'programming', 'analysis'],
        aliases: [],
    },
    {
        name: 'Weka',
        level: 1,
        category: 'data',
        related: ['Python', 'R'],
        tags: ['data-science', 'ml', 'data-mining', 'analysis'],
        aliases: [],
    },
    {
        name: 'Docker',
        level: 3,
        category: 'devops',
        related: ['Spring Boot', 'Spring Cloud', 'Java'],
        tags: ['devops', 'containers', 'deployment', 'infrastructure'],
        aliases: ['containers'],
    },
    {
        name: 'Git',
        level: 3,
        category: 'devops',
        related: [],
        tags: ['devops', 'version-control', 'tools'],
        aliases: ['github', 'gitlab'],
    },
    {
        name: 'Azure / AWS (Cloud)',
        level: 1,
        category: 'devops',
        related: ['Docker'],
        tags: ['cloud', 'infrastructure', 'devops', 'deployment'],
        aliases: ['azure', 'aws', 'amazon web services', 'microsoft azure'],
    },
    {
        name: 'Tauri',
        level: 2,
        category: 'tools',
        related: ['JavaScript', 'React', 'Rust'],
        tags: ['desktop', 'frontend', 'framework', 'app'],
        aliases: ['tauri-apps'],
    },
    {
        name: 'Android Studio',
        level: 2,
        category: 'tools',
        related: ['Java'],
        tags: ['mobile', 'android', 'development', 'ide'],
        aliases: ['android'],
    },
    {
        name: 'Jira',
        level: 2,
        category: 'tools',
        related: ['Confluence'],
        tags: ['project-management', 'agile', 'scrum', 'tools'],
        aliases: [],
    },
    {
        name: 'Confluence',
        level: 2,
        category: 'tools',
        related: ['Jira'],
        tags: ['project-management', 'documentation', 'collaboration'],
        aliases: [],
    },
    {
        name: 'Unity',
        level: 1,
        category: 'tools',
        related: ['C#'],
        tags: ['game', 'development', '3d', 'programming'],
        aliases: ['unity3d'],
    },
    {
        name: 'WordPress',
        level: 1,
        category: 'tools',
        related: ['PHP / Laravel'],
        tags: ['web', 'cms', 'frontend', 'backend'],
        aliases: ['wp'],
    },
];

export const projects = [
    {
        title: 'Maker Studio',
        featured: true,
        period: { es: '2026 - Actual', en: '2026 - Present' },
        description: {
            es: 'Editor de mapas multiplataforma que moderniza RPG Maker XP: lee y escribe .rxdata directamente, con capas ilimitadas, editor de eventos, simulador integrado y mods con marketplace.',
            en: 'Cross-platform map editor that modernizes RPG Maker XP: reads and writes .rxdata directly, with unlimited layers, an event editor, a built-in simulator and mods with a marketplace.',
        },
        tags: ['React', 'TypeScript', 'Rust', 'Tauri'],
        image: 'https://makerstudio.toskan.es/og-image.png',
        links: [
            {
                icon: 'github',
                label: 'GitHub',
                url: 'https://github.com/Toskan4134/maker-studio',
            },
            {
                icon: 'external',
                label: { es: 'Web', en: 'Website' },
                url: 'https://makerstudio.toskan.es',
            },
        ],
    },
    {
        title: 'Fakedex',
        featured: true,
        period: { es: '2025 - Actual', en: '2025 - Present' },
        description: {
            es: 'Plataforma full-stack para que creadores de fangames publiquen y gestionen su propia Pokédex: Pokémon, movimientos, objetos, entrenadores y mapas, con roles, colaboradores y soporte multi-juego.',
            en: 'Full-stack platform for fangame creators to publish and manage their own Pokédex: Pokémon, moves, items, trainers and maps, with roles, collaborators and multi-game support.',
        },
        tags: ['Next.js', 'React', 'PostgreSQL', 'Tailwind'],
        image: 'https://i.imgur.com/Q5rSNng.png',
        links: [
            {
                icon: 'external',
                label: { es: 'Ver', en: 'Visit' },
                url: 'https://www.fakedex.es/',
            },
        ],
    },
    {
        title: 'PokeShop',
        period: '2024',
        description: {
            es: 'Aplicación de escritorio para generar una tienda aleatoria de Pokémon por regiones y tiers. Permite compras con moneda ficticia, rerolls limitados y un historial de acciones.',
            en: 'Desktop app that generates a random Pokémon shop by region and tier. Supports purchases with fictional currency, limited rerolls and an action history.',
        },
        tags: ['JavaScript', 'Desktop'],
        image: 'https://i.imgur.com/HvxW6Ov.png',
        links: [
            {
                icon: 'github',
                label: 'GitHub',
                url: 'https://github.com/Toskan4134/PokeShop',
            },
            {
                icon: 'download',
                label: { es: 'Descargar', en: 'Download' },
                url: 'https://github.com/Toskan4134/PokeShop/releases/latest',
            },
        ],
    },
    {
        title: 'Lethal Regeneration',
        period: '2023 - 2024',
        description: {
            es: 'Mod de Lethal Company que añade un sistema de regeneración de vida personalizable, sincronizado con la configuración del host.',
            en: 'Lethal Company mod that adds a customizable health regeneration system, synced with the host settings.',
        },
        tags: ['C#', 'Unity'],
        image: 'https://i.imgur.com/IHxyTf0.png',
        links: [
            {
                icon: 'github',
                label: 'GitHub',
                url: 'https://github.com/Toskan4134/LethalRegeneration',
            },
            {
                icon: 'external',
                label: 'Thunderstore',
                url: 'https://thunderstore.io/c/lethal-company/p/Toskan4134/LethalRegeneration/',
            },
        ],
    },
    {
        title: 'Natural Regeneration',
        period: '2026',
        description: {
            es: 'Plugin para servidores de Hytale que regenera vida pasivamente después de un tiempo configurable sin recibir daño.',
            en: 'Hytale server plugin that passively regenerates health after a configurable time without taking damage.',
        },
        tags: ['Java', 'Hytale'],
        image: 'https://github.com/Toskan4134/NaturalRegeneration-Hytale/blob/main/src/main/resources/Common/UI/Custom/Toskan4134_NaturalRegeneration.png?raw=true',
        links: [
            {
                icon: 'github',
                label: 'GitHub',
                url: 'https://github.com/Toskan4134/NaturalRegeneration-Hytale',
            },
            {
                icon: 'external',
                label: 'CurseForge',
                url: 'https://www.curseforge.com/hytale/mods/naturalregeneration',
            },
        ],
    },
    {
        title: 'EasyTrade',
        period: '2026',
        description: {
            es: 'Plugin de Hytale para intercambios seguros entre jugadores, con una interfaz interactiva y transacciones atómicas.',
            en: 'Hytale plugin for safe player-to-player trading, with an interactive UI and atomic transactions.',
        },
        tags: ['Java', 'Hytale'],
        image: 'https://github.com/Toskan4134/EasyTrade/blob/main/src/main/resources/Common/UI/Custom/Toskan4134_EasyTrade.png?raw=true',
        links: [
            {
                icon: 'github',
                label: 'GitHub',
                url: 'https://github.com/Toskan4134/EasyTrade',
            },
            {
                icon: 'external',
                label: 'CurseForge',
                url: 'https://www.curseforge.com/hytale/mods/easytrade',
            },
        ],
    },
];

export const experience = [
    {
        company: 'Hiberus',
        position: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
        period: { es: 'Diciembre 2024 - Actual', en: 'December 2024 - Present' },
        current: true,
        location: { es: 'Zaragoza, España', en: 'Zaragoza, Spain' },
        website: 'https://hiberus.com',
        tech: ['Java', 'Spring Boot', 'Spring Cloud', 'Next.js', 'Docker', 'Keycloak', 'Git'],
        entries: [
            {
                title: {
                    es: 'Backend y microservicios',
                    en: 'Backend & microservices',
                },
                points: [
                    {
                        es: 'Desarrollo backend con Java, Spring Boot y Spring Cloud (tests con Mockito, Lombok).',
                        en: 'Backend development with Java, Spring Boot and Spring Cloud (Mockito tests, Lombok).',
                    },
                    {
                        es: 'Despliegue de entornos con Docker (Test, Dev y Pre).',
                        en: 'Environment deployments with Docker (Test, Dev and Pre).',
                    },
                    {
                        es: 'Mantenimiento y resolución de incidencias de procesos Java y OSB.',
                        en: 'Maintenance and incident resolution for Java and OSB processes.',
                    },
                ],
            },
            {
                title: {
                    es: 'Gestión de identidades con Keycloak',
                    en: 'Identity management with Keycloak',
                },
                points: [
                    {
                        es: 'Creación y modificación de scripts Java para Keycloak (mapeo y control de claves).',
                        en: 'Java scripts for Keycloak (key mapping and control).',
                    },
                    {
                        es: 'Consola de gestión de Keycloak con Next.js (frontend y backend).',
                        en: 'Keycloak management console built with Next.js (frontend and backend).',
                    },
                ],
            },
            {
                title: {
                    es: 'Metodología y equipo',
                    en: 'Methodology & teamwork',
                },
                points: [
                    {
                        es: 'Scrum, con planificación y seguimiento de tareas en Jira y Confluence.',
                        en: 'Scrum, with task planning and tracking in Jira and Confluence.',
                    },
                    {
                        es: 'Gestión de versiones con Git (GitHub, GitLab y Azure).',
                        en: 'Version control with Git (GitHub, GitLab and Azure).',
                    },
                ],
            },
        ],
    },
    {
        company: 'Memorándum Multimedia',
        position: {
            es: 'Programador Full Stack (Becario)',
            en: 'Full Stack Developer (Intern)',
        },
        period: {
            es: 'Marzo 2024 - Junio 2024',
            en: 'March 2024 - June 2024',
        },
        location: { es: 'Zaragoza, España', en: 'Zaragoza, Spain' },
        website: 'https://memorandum.es',
        tech: ['Python', 'LangChain', 'Next.js', 'WordPress', 'PHP', 'Laravel'],
        entries: [
            {
                title: { es: 'Chatbot con IA', en: 'AI chatbot' },
                points: [
                    {
                        es: 'Desarrollo de un chatbot con Python y LangChain.',
                        en: 'Built a chatbot with Python and LangChain.',
                    },
                    {
                        es: 'Frontend del chatbot con Next.js.',
                        en: 'Chatbot frontend with Next.js.',
                    },
                ],
            },
            {
                title: { es: 'Desarrollo web', en: 'Web development' },
                points: [
                    {
                        es: 'Páginas web con WordPress y backend con PHP y Laravel.',
                        en: 'Websites with WordPress and backend with PHP and Laravel.',
                    },
                ],
            },
            {
                title: { es: 'IA y automatización', en: 'AI & automation' },
                points: [
                    {
                        es: 'Entrenamiento de IA para el reconocimiento de objetos.',
                        en: 'Trained AI models for object recognition.',
                    },
                    {
                        es: 'Automatización de Check-In con Google Scripts y Spreadsheets.',
                        en: 'Check-In automation with Google Scripts and Spreadsheets.',
                    },
                ],
            },
        ],
    },
    {
        company: 'DXC Technology',
        position: {
            es: 'Programador Java (Becario)',
            en: 'Java Developer (Intern)',
        },
        period: {
            es: 'Septiembre 2022 - Junio 2023',
            en: 'September 2022 - June 2023',
        },
        location: { es: 'Zaragoza, España', en: 'Zaragoza, Spain' },
        website: 'https://dxc.com/es/es',
        tech: ['Java', 'Spring Boot'],
        entries: [
            {
                title: null,
                points: [
                    {
                        es: 'Programación de microservicios con Spring Boot y Java.',
                        en: 'Microservices development with Spring Boot and Java.',
                    },
                    {
                        es: 'Conocimiento sobre metodologías ABSIS.',
                        en: 'Knowledge of ABSIS methodologies.',
                    },
                ],
            },
        ],
    },
];

export const education = [
    {
        title: {
            es: 'Curso de Especialización en IA y Big Data',
            en: 'Specialization Course in AI & Big Data',
        },
        school: 'Campus Digital',
        period: '2023 - 2024',
    },
    {
        title: {
            es: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
            en: 'HND in Multiplatform Application Development',
        },
        school: 'Colegio Montessori',
        period: '2023 - 2024',
    },
    {
        title: {
            es: 'CFGS Desarrollo de Aplicaciones Web',
            en: 'HND in Web Application Development',
        },
        school: 'Centro San Valero',
        period: '2021 - 2023',
    },
    {
        title: {
            es: 'Bachillerato Tecnológico',
            en: 'Technological Baccalaureate',
        },
        school: 'Centro San Valero',
        period: '2019 - 2021',
    },
];

export const certifications = [
    {
        type: 'cert',
        title: 'Information Technology Specialist in Java',
        issuer: 'Certiport',
        year: '2025',
        url: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=472&cvid=6r+3xyWgwoHLWxdnCtCYng==',
    },
    {
        type: 'cert',
        title: 'Information Technology Specialist in JavaScript',
        issuer: 'Certiport',
        year: '2025',
        url: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=469&cvid=0s/e2k1BFyY6m5x8F/vR9g==',
    },
    {
        type: 'award',
        title: 'NASA Space Apps - National Challenge',
        issuer: {
            es: "1er premio de la hackathon con el proyecto Human's Fate",
            en: "1st prize of the hackathon with the Human's Fate project",
        },
        url:'https://2021.spaceappschallenge.org/challenges/statements/the-trail-to-mars-can-you-keep-your-crew-alive/teams/moto-moto/',
        year: '2021',
    },
];

export const contacts = [
    {
        icon: 'mail',
        label: 'angama4134@gmail.com',
        url: 'mailto:angama4134@gmail.com',
    },
    { icon: 'github', label: 'GitHub', url: 'https://github.com/Toskan4134' },
    {
        icon: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/angel-gaudes/',
    },
    { icon: 'twitter', label: 'X / Twitter', url: 'https://x.com/Toskan4134' },
];
