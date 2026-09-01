// Todo el contenido del portfolio vive aquí: añade objetos a estas listas
// y la web se actualiza sola. Los textos admiten string plano o { es, en }.

export const skillCategories = [
    { id: 'frontend', label: { es: 'Frontend', en: 'Frontend' } },
    { id: 'backend', label: { es: 'Backend', en: 'Backend' } },
    { id: 'ai', label: { es: 'IA / LLM', en: 'AI / LLM' } },
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
        level: 4,
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
        level: 3,
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
        level: 2,
        category: 'backend',
        related: ['FastAPI', 'Django', 'LangChain / LangGraph', 'R', 'Weka'],
        tags: ['programming', 'data-science', 'backend', 'ai', 'ml', 'asyncio'],
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
        name: 'FastAPI',
        level: 3,
        category: 'backend',
        related: ['Python', 'Django', 'LangChain / LangGraph'],
        tags: ['backend', 'python', 'api', 'rest', 'framework', 'async'],
        aliases: ['uvicorn', 'pydantic'],
    },
    {
        name: 'Hono',
        level: 2,
        category: 'backend',
        related: ['TypeScript', 'Cloudflare Workers', 'Node.js'],
        tags: ['backend', 'typescript', 'api', 'rest', 'framework', 'edge', 'openapi'],
        aliases: ['honojs', 'zod'],
    },
    {
        name: 'Django',
        level: 2,
        category: 'backend',
        related: ['Python', 'FastAPI', 'MySQL / PostgreSQL'],
        tags: ['backend', 'python', 'web', 'framework', 'api'],
        aliases: ['django rest framework'],
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
        name: 'LangChain / LangGraph',
        level: 2,
        category: 'ai',
        related: ['Python', 'FastAPI', 'RAG / pgvector', 'LLM APIs'],
        tags: ['ai', 'llm', 'agents', 'python', 'tool-calling', 'ml'],
        aliases: ['langchain', 'langgraph', 'langsmith', 'agentes', 'agents'],
    },
    {
        name: 'RAG / pgvector',
        level: 2,
        category: 'ai',
        related: ['LangChain / LangGraph', 'MySQL / PostgreSQL', 'Python'],
        tags: ['ai', 'llm', 'rag', 'embeddings', 'search', 'data'],
        aliases: ['rag', 'pgvector', 'embeddings', 'vector search'],
    },
    {
        name: 'LLM APIs',
        level: 2,
        category: 'ai',
        related: ['LangChain / LangGraph', 'TypeScript', 'Python'],
        tags: ['ai', 'llm', 'api', 'gemini', 'openai'],
        aliases: ['gemini', 'openai', 'openrouter', 'vercel ai sdk', 'ai sdk'],
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
        level: 3,
        category: 'data',
        related: ['Java', 'Spring Boot', 'Node.js', 'PHP / Laravel', 'Drizzle ORM', 'RAG / pgvector'],
        tags: ['database', 'backend', 'sql', 'data', 'db'],
        aliases: ['mysql', 'postgresql', 'postgres'],
    },
    {
        name: 'Drizzle ORM',
        level: 3,
        category: 'data',
        related: ['TypeScript', 'MySQL / PostgreSQL', 'Hono'],
        tags: ['database', 'orm', 'typescript', 'sql', 'migrations', 'data'],
        aliases: ['drizzle', 'drizzle-kit'],
    },
    {
        name: 'Redis',
        level: 2,
        category: 'data',
        related: ['Node.js', 'Python', 'Docker'],
        tags: ['database', 'cache', 'queues', 'nosql', 'data', 'db'],
        aliases: ['redis 7', 'colas', 'queues'],
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
        name: 'Cloudflare Workers',
        level: 2,
        category: 'devops',
        related: ['Hono', 'TypeScript', 'Next.js', 'Docker'],
        tags: ['cloud', 'edge', 'serverless', 'deployment', 'devops'],
        aliases: ['cloudflare', 'workers', 'wrangler', 'opennext', 'hyperdrive'],
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
        image: 'https://i.imgur.com/OIRyXW1.png',
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
        title: 'Apachas',
        period: '2026',
        description: {
            es: 'Reparte los gastos con tus amigos. Al estilo de Splitwise o Tricount, totalmente autohospedado. Un servidor, una URL: la aplicación web, la PWA instalable y la aplicación nativa para Android se conectan todas al mismo sitio.',
            en: 'Split expenses with your friends. Splitwise/Tricount style, fully self-hosted. One server, one URL: the web app, the installable PWA and the native Android app all talk to the same place.',
        },
        tags: ['React', 'Docker', 'Tailwind', 'AI'],
        image: 'https://github.com/Toskan4134/Apachas/blob/main/apps/web/public/icons/icon.svg?raw=true',
        links: [
            {
                icon: 'github',
                label: 'GitHub',
                url: 'https://github.com/Toskan4134/Apachas',
            },
            {
                icon: 'external',
                label: { es: 'Web', en: 'Website' },
                url: 'https://apachas.toskan.es',
            },
        ],
    },
];

export const experience = [
    {
        company: 'Capillar IT',
        start: '2026-08-31',
        end: null,
        position: {
            es: 'Programador Senior Full Stack',
            en: 'Senior Full Stack Developer',
        },
        period: { es: 'Agosto 2026 - Actual', en: 'August 2026 - Present' },
        current: true,
        location: { es: 'Zaragoza, España', en: 'Zaragoza, Spain' },
        website: 'https://capillarit.com',
        tech: [
            'TypeScript',
            'Python',
            'Hono',
            'FastAPI',
            'Next.js',
            'PostgreSQL',
            'LangGraph',
            'Cloudflare Workers',
            'Docker',
        ],
        entries: [
            {
                title: {
                    es: 'API multi-tenant y backend',
                    en: 'Multi-tenant API & backend',
                },
                points: [
                    {
                        es: 'API REST multi-tenant con Hono v4 sobre Cloudflare Workers, documentada con OpenAPI y clientes tipados generados.',
                        en: 'Multi-tenant REST API with Hono v4 on Cloudflare Workers, documented with OpenAPI and generated typed clients.',
                    },
                    {
                        es: 'Servicios en Python con FastAPI, validación con Zod y Pydantic y autenticación con Better-Auth.',
                        en: 'Python services with FastAPI, validation with Zod and Pydantic, and authentication with Better-Auth.',
                    },
                    {
                        es: 'PostgreSQL 16 con Drizzle ORM y Redis para las colas de la pasarela de WhatsApp.',
                        en: 'PostgreSQL 16 with Drizzle ORM and Redis for the WhatsApp gateway queues.',
                    },
                ],
            },
            {
                title: { es: 'Agentes de IA', en: 'AI agents' },
                points: [
                    {
                        es: 'Agentes con LangGraph y LangChain: grafos de estado, tool calling tipado y memoria persistente en PostgreSQL.',
                        en: 'Agents with LangGraph and LangChain: state graphs, typed tool calling and persistent memory in PostgreSQL.',
                    },
                    {
                        es: 'RAG con embeddings sobre pgvector e ingesta multimodal (voz, foto y PDF).',
                        en: 'RAG with embeddings on pgvector and multimodal ingestion (voice, photo and PDF).',
                    },
                    {
                        es: 'Modelos de Gemini, OpenAI y OpenRouter integrados con el AI SDK de Vercel, con trazas y evaluación en LangSmith.',
                        en: 'Gemini, OpenAI and OpenRouter models integrated with the Vercel AI SDK, with tracing and evaluation in LangSmith.',
                    },
                ],
            },
            {
                title: { es: 'Frontend y PWA', en: 'Frontend & PWA' },
                points: [
                    {
                        es: 'Next.js 16 (App Router, Server Components y Server Actions) con React 19, Tailwind CSS 4 y shadcn/ui.',
                        en: 'Next.js 16 (App Router, Server Components and Server Actions) with React 19, Tailwind CSS 4 and shadcn/ui.',
                    },
                    {
                        es: 'PWA móvil de picking, tablas virtualizadas con TanStack y exportación a Excel y PDF.',
                        en: 'Mobile picking PWA, virtualized tables with TanStack, and Excel and PDF export.',
                    },
                ],
            },
            {
                title: {
                    es: 'Infraestructura e integraciones',
                    en: 'Infrastructure & integrations',
                },
                points: [
                    {
                        es: 'Despliegues en Cloudflare Workers, Google Cloud Run y VPS con Docker, Nginx y CI/CD en Forgejo Actions.',
                        en: 'Deployments on Cloudflare Workers, Google Cloud Run and VPS with Docker, Nginx and CI/CD on Forgejo Actions.',
                    },
                    {
                        es: 'Integraciones con WhatsApp Business, Telegram y conectores ERP on-prem mediante daemons asíncronos y colas por tenant.',
                        en: 'Integrations with WhatsApp Business, Telegram and on-prem ERP connectors through async daemons and per-tenant queues.',
                    },
                    {
                        es: 'Monitorización con Sentry y Uptime Kuma; tests con Vitest y pytest.',
                        en: 'Monitoring with Sentry and Uptime Kuma; testing with Vitest and pytest.',
                    },
                ],
            },
        ],
    },
    {
        company: 'Hiberus',
        start: '2024-12-01',
        end: '2026-08-22',
        position: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
        period: {
            es: 'Diciembre 2024 - Agosto 2026',
            en: 'December 2024 - August 2026',
        },
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
        start: '2024-03-01',
        end: '2024-06-30',
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
        start: '2022-09-01',
        end: '2023-06-30',
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

// Meses trabajados en total: fusiona los periodos solapados y cuenta hasta hoy
export const experienceMonths = () => {
    const ranges = experience
        .map((job) => [+new Date(job.start), job.end ? +new Date(job.end) : Date.now()])
        .sort((a, b) => a[0] - b[0]);
    const merged = [];
    for (const [start, end] of ranges) {
        const last = merged[merged.length - 1];
        if (last && start <= last[1]) last[1] = Math.max(last[1], end);
        else merged.push([start, end]);
    }
    const days = merged.reduce((total, [s, e]) => total + (e - s), 0) / 86400000;
    return Math.round(days / 30.437);
};

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
