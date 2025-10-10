export const skills = [
    {
        name: 'JavaScript',
        level: 4,
        related: ['React', 'Next.js', 'Vue.js', 'Node.js'],
        tags: ['web', 'frontend', 'backend', 'programming'],
        aliases: ['js', 'ecmascript'],
    },
    {
        name: 'HTML',
        level: 3,
        related: ['CSS', 'JavaScript', 'React', 'Next.js', 'Vue.js'],
        tags: ['web', 'frontend', 'markup'],
        aliases: ['html5'],
    },
    {
        name: 'CSS',
        level: 3,
        related: ['HTML', 'Tailwind', 'React', 'Next.js', 'Vue.js'],
        tags: ['web', 'frontend', 'styling', 'design'],
        aliases: ['css3', 'stylesheets'],
    },
    {
        name: 'Node.js',
        level: 3,
        related: ['JavaScript', 'MongoDB', 'Next.js'],
        tags: ['backend', 'javascript', 'server', 'web'],
        aliases: ['node', 'nodejs'],
    },
    {
        name: 'MongoDB',
        level: 3,
        related: ['Node.js', 'JavaScript'],
        tags: ['database', 'backend', 'nosql', 'data', 'db'],
        aliases: ['mongo'],
    },
    {
        name: 'Docker',
        level: 3,
        related: ['Spring Boot', 'Spring Cloud', 'Java'],
        tags: ['devops', 'containers', 'deployment', 'infrastructure'],
        aliases: ['containers'],
    },
    {
        name: 'React',
        level: 3,
        related: ['JavaScript', 'Next.js', 'HTML', 'CSS', 'Tailwind'],
        tags: ['web', 'frontend', 'javascript', 'framework', 'ui'],
        aliases: ['reactjs', 'react.js'],
    },
    {
        name: 'Next.js',
        level: 3,
        related: ['React', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Tailwind'],
        tags: ['web', 'frontend', 'backend', 'fullstack', 'framework', 'react'],
        aliases: ['nextjs', 'next'],
    },
    {
        name: 'Spring Boot',
        level: 2,
        related: ['Java', 'Spring Cloud', 'Docker'],
        tags: ['backend', 'java', 'framework', 'web', 'api'],
        aliases: ['springboot', 'spring'],
    },
    {
        name: 'Spring Cloud',
        level: 2,
        related: ['Java', 'Spring Boot', 'Docker'],
        tags: ['backend', 'java', 'microservices', 'cloud'],
        aliases: ['springcloud'],
    },
    {
        name: 'Vue.js',
        level: 2,
        related: ['JavaScript', 'HTML', 'CSS', 'Tailwind'],
        tags: ['web', 'frontend', 'javascript', 'framework', 'ui'],
        aliases: ['vue', 'vuejs'],
    },
    {
        name: 'Tailwind',
        level: 2,
        related: ['CSS', 'React', 'Next.js', 'Vue.js', 'HTML'],
        tags: ['web', 'frontend', 'css', 'styling', 'design', 'framework'],
        aliases: ['tailwindcss', 'tailwind css'],
    },
    {
        name: 'Java',
        level: 2,
        related: [
            'Spring Boot',
            'Spring Cloud',
            'Android Studio',
            'Docker',
            'Keycloak',
        ],
        tags: ['backend', 'programming', 'oop', 'enterprise'],
        aliases: ['jdk', 'jvm'],
    },
    {
        name: 'Android Studio',
        level: 2,
        related: ['Java'],
        tags: ['mobile', 'android', 'development', 'ide'],
        aliases: ['android'],
    },
    {
        name: 'C#',
        level: 2,
        related: ['ASP.NET', 'Unity'],
        tags: ['backend', 'programming', 'oop', 'microsoft', 'game'],
        aliases: ['csharp', 'c sharp'],
    },
    {
        name: 'ASP.NET',
        level: 2,
        related: ['C#'],
        tags: ['backend', 'web', 'framework', 'microsoft'],
        aliases: ['asp.net core', 'aspnet', 'dotnet'],
    },
    {
        name: 'MySQL / PostgreSQL',
        level: 2,
        related: ['Java', 'Spring Boot', 'Node.js', 'PHP / Laravel'],
        tags: ['database', 'backend', 'sql', 'data', 'db'],
        aliases: ['mysql', 'postgresql', 'postgres'],
    },
    {
        name: 'Jira',
        level: 2,
        related: ['Confluence'],
        tags: ['project-management', 'agile', 'scrum', 'tools'],
        aliases: [],
    },
    {
        name: 'Confluence',
        level: 2,
        related: ['Jira'],
        tags: ['project-management', 'documentation', 'collaboration', 'tools'],
        aliases: [],
    },
    {
        name: 'Ruby',
        level: 2,
        related: [],
        tags: ['backend', 'programming', 'web'],
        aliases: ['ruby on rails', 'rails', 'ror'],
    },
    {
        name: 'PHP / Laravel',
        level: 1,
        related: ['MySQL / PostgreSQL', 'WordPress'],
        tags: ['backend', 'web', 'programming', 'framework'],
        aliases: ['php', 'laravel'],
    },
    {
        name: 'Python',
        level: 1,
        related: ['R', 'Weka'],
        tags: ['programming', 'data-science', 'backend', 'ai', 'ml'],
        aliases: ['py'],
    },
    {
        name: 'R',
        level: 1,
        related: ['Python', 'Weka'],
        tags: ['data-science', 'statistics', 'programming', 'analysis'],
        aliases: [],
    },
    {
        name: 'Weka',
        level: 1,
        related: ['Python', 'R'],
        tags: ['data-science', 'ml', 'data-mining', 'analysis'],
        aliases: [],
    },
    {
        name: 'Azure / AWS (Cloud)',
        level: 1,
        related: ['Docker'],
        tags: ['cloud', 'infrastructure', 'devops', 'deployment'],
        aliases: ['azure', 'aws', 'amazon web services', 'microsoft azure'],
    },
    {
        name: 'WordPress',
        level: 1,
        related: ['PHP / Laravel'],
        tags: ['web', 'cms', 'frontend', 'backend'],
        aliases: ['wp'],
    },
    {
        name: 'Unity',
        level: 1,
        related: ['C#'],
        tags: ['game', 'development', '3d', 'programming'],
        aliases: ['unity3d'],
    },
    {
        name: 'Keycloak',
        level: 1,
        related: ['Java', 'Spring Boot'],
        tags: ['backend', 'security', 'authentication', 'java'],
        aliases: [],
    },
    {
        name: 'Tauri',
        level: 2,
        related: ['JavaScript', 'React', 'Next.js', 'Vue.js'],
        tags: ['desktop', 'frontend', 'framework', 'app'],
        aliases: ['tauri-apps'],
    },
];

export const projects = [
    {
        title: 'PokeShop',
        description:
            'Aplicación de escritorio para generar una tienda aleatoria de Pokémon por regiones y tiers. Permite compras con moneda ficticia, rerolls limitados y un historial de acciones.',
        github: 'https://github.com/Toskan4134/PokeShop',
        web: {
            name: 'Descargar',
            url: 'https://github.com/Toskan4134/PokeShop/releases/latest',
        },
        image: 'https://private-user-images.githubusercontent.com/62228706/492068677-4d4650fc-9f38-4b2d-b1e5-8e31c6a59c10.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjAxMTQ1ODAsIm5iZiI6MTc2MDExNDI4MCwicGF0aCI6Ii82MjIyODcwNi80OTIwNjg2NzctNGQ0NjUwZmMtOWYzOC00YjJkLWIxZTUtOGUzMWM2YTU5YzEwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEwMTAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMDEwVDE2MzgwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk2YTRmODZlYTEyNGFiN2E2Y2ZjMzE4ODIxYzEwMmEyMTUxMDg1M2M0Y2JmNmRlNTIxYzMwYjZkNTFmOWE0NTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.bYWJxPGV9tdwC2_KPzLP57_M-UrMaFSiQ1V8d6zb2h4',
    },
    {
        title: 'LethalRegeneration',
        description: 'A simple regeneration Lethal Compay mod',
        github: 'https://github.com/Toskan4134/LethalRegeneration',
        web: {
            name: 'Ver',
            url: 'https://thunderstore.io/c/lethal-company/p/Toskan4134/LethalRegeneration/',
        },
        image: 'https://i.imgur.com/IHxyTf0.png',
    },
    {
        title: 'DnD Printable Character Generator',
        description:
            'Este proyecto es una herramienta para generar fichas y miniaturas de DnD imprimibles',
        github: 'https://github.com/toskan4134/dnd-printable-character-generator',
        web: {
            name: 'Ver',
            url: 'https://toskan4134.github.io/dnd-printable-character-generator/',
        },
        image: 'https://i.imgur.com/OUHgRXI.png',
    },
    // {
    //     title: "Human's Fate Reborn",
    //     description: 'Trabajo para Programación de Multimedia 2ºDAM con libGDX',
    //     github: 'https://github.com/Toskan4134/HumansFate-Reborn',
    //     web: {
    //         name: 'Descargar',
    //         url: 'https://github.com/Toskan4134/HumansFate-Reborn/releases/tag/v1.0.1',
    //     },
    //     image: 'https://i.imgur.com/nGfnuhU.png',
    // },
];

export const experience = [
    {
        company: 'Hiberus',
        position: 'Desarrollador Fullstack',
        period: 'Diciembre de 2024 - Actual',
        description: `— Desarrollo Backend con Java, Spring Boot y Spring Cloud. Mockito para los tests y Lombok
— Despliegues de entornos con Docker (Test, Dev y Pre)
— Gestión de versiones con Git (Github, GitLab y Azure)
— Metodología de trabajo Scrum
— Planificación y seguimiento de tareas con Jira y Confluence.
— Creación y modificación de scripts Java para Keycloak (mapeo y control de claves)
— Desarrollo Frontend y Backend con Nextjs (javascript) para una consola de gestión de Keycloak
— Mantenimiento y resolución de incidencias de procesos Java y OSB`,
        website: 'https://hiberus.com',
        location: 'Zaragoza, España',
    },
    {
        company: 'Memorándum Multimedia',
        position: 'Programador Full Stack (Becario)',
        period: 'Marzo de 2024 - Junio de 2024 (3 meses)',
        description: `— Desarrollo de chatbot con python y langchain
— Desarrollo de frontend para el chatbot con next.js
— Desarrollo de páginas webs con wordpress
— Desarrollo de backend con php y larabel
— Entrenamiento de inteligencia artificial para la recognición de objetos
— Uso de Google Scripts y Google Spreadsheets para la automatización de Check-In`,
        website: 'https://memorandum.es',
        location: 'Zaragoza, España',
    },
    {
        company: 'DXC Technology',
        position: 'Programador Java (Becario)',
        period: 'Septiembre de 2022 - Junio de 2023 (9 meses)',
        description: `— Programación de Microservicios (Spring Boot, Java)
— Conocimiento sobre metodologías ABSIS`,
        website: 'https://dxc.com/es/es',
        location: 'Zaragoza, España',
    },
];
