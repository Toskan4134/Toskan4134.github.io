import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Search, TwitterIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import yoCartoon from './assets/YoCartoonWide.png';
import { Button } from './components/button';
import ExperienceCard from './components/experienceCard';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import ProjectCard from './components/projectCard';
import SkillCard from './components/skillCard';
import { experience, projects, skills } from './lib/lists';
import {
    fadeIn,
    staggerChildrenSlow
} from './lib/motions';

function App() {
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);
    const [showAllSkills, setShowAllSkills] = useState(false);
    const [defaultVisibleSkillsCount, setDefaultVisibleSkillsCount] =
        useState(8);
    const [skillSearch, setSkillSearch] = useState('');
    const [konamiActive, setKonamiActive] = useState(false);
    const [konamiSequence, setKonamiSequence] = useState([]);

    const [startRef, setStartRef] = useState(null);
    const [skillsRef, setSkillsRef] = useState(null);
    const [experienceRef, setExperienceRef] = useState(null);
    const [projectsRef, setProjectsRef] = useState(null);
    const [contactRef, setContactRef] = useState(null);

    const handleResize = useCallback(() => {
        const windowWidth = window.innerWidth;
        let columns;

        if (windowWidth >= 1024) {
            columns = 4;
        } else if (windowWidth >= 768) {
            columns = 3;
        } else if (windowWidth >= 420) {
            columns = 2;
        } else {
            columns = 1;
        }

        const rows = 2;
        const newVisibleCount = columns * rows;
        setDefaultVisibleSkillsCount(newVisibleCount);
        setShowAllSkills(false);
    }, []);

    useEffect(() => {
        // Disable automatic scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Reset scroll position on mount
        window.scrollTo(0, 0);
        setMounted(true);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    // Konami Code Easter Egg
    useEffect(() => {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

        const handleKeyPress = (e) => {
            const key = e.key.toLowerCase() === 'arrowup' ? 'ArrowUp' :
                        e.key.toLowerCase() === 'arrowdown' ? 'ArrowDown' :
                        e.key.toLowerCase() === 'arrowleft' ? 'ArrowLeft' :
                        e.key.toLowerCase() === 'arrowright' ? 'ArrowRight' :
                        e.key.toLowerCase();

            setKonamiSequence(prev => {
                const newSequence = [...prev, key];

                // Keep only the last 10 keys
                if (newSequence.length > 10) {
                    newSequence.shift();
                }

                // Check if sequence matches Konami Code
                if (newSequence.length === 10) {
                    const matches = newSequence.every((k, i) => k === konamiCode[i]);
                    if (matches) {
                        setKonamiActive(prev => !prev);
                        return [];
                    }
                }

                return newSequence;
            });
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 125,
        damping: 45,
        restDelta: 0.001,
    });

    if (!mounted) {
        return null;
    }

    const filteredSkills = skillSearch
        ? skills.filter((skill) => {
              const searchLower = skillSearch.toLowerCase();
              const nameMatch = skill.name.toLowerCase().includes(searchLower);

              // Check if any alias matches the search
              const aliasMatch = skill.aliases?.some(alias =>
                  alias.toLowerCase().includes(searchLower)
              );

              // Check if any tag matches the search
              const tagMatch = skill.tags?.some(tag =>
                  tag.toLowerCase().includes(searchLower)
              );

              // Check if any related skill matches the search
              const relatedMatch = skill.related?.some(relatedName =>
                  relatedName.toLowerCase().includes(searchLower)
              );

              // Check if this skill is related to any skill that matches the search
              const isRelatedToMatch = skills.some(otherSkill => {
                  const otherMatches = otherSkill.name.toLowerCase().includes(searchLower);
                  const thisIsRelated = otherSkill.related?.includes(skill.name);
                  return otherMatches && thisIsRelated;
              });

              return nameMatch || aliasMatch || tagMatch || relatedMatch || isRelatedToMatch;
          }).sort((a, b) => {
              const searchLower = skillSearch.toLowerCase();
              const aNameMatch = a.name.toLowerCase().includes(searchLower);
              const bNameMatch = b.name.toLowerCase().includes(searchLower);
              const aAliasMatch = a.aliases?.some(alias => alias.toLowerCase().includes(searchLower));
              const bAliasMatch = b.aliases?.some(alias => alias.toLowerCase().includes(searchLower));
              const aTagMatch = a.tags?.some(tag => tag.toLowerCase().includes(searchLower));
              const bTagMatch = b.tags?.some(tag => tag.toLowerCase().includes(searchLower));

              // Combine name and alias matches as same priority (highest)
              const aDirectMatch = aNameMatch || aAliasMatch;
              const bDirectMatch = bNameMatch || bAliasMatch;

              // First priority: name/alias matches come first
              if (aDirectMatch && !bDirectMatch) return -1;
              if (!aDirectMatch && bDirectMatch) return 1;

              // Second priority: tag matches come before relation matches
              if (aTagMatch && !bTagMatch && !bDirectMatch) return -1;
              if (!aTagMatch && bTagMatch && !aDirectMatch) return 1;

              // Third priority: sort by level (higher level first)
              if (a.level !== b.level) return b.level - a.level;

              // Fourth priority: alphabetical by name
              return a.name.localeCompare(b.name);
          })
        : skills;
    
    const toggleSkills = () => {
        setShowAllSkills((prev) => !prev);
    };

    return (
        <div
            className={`App ${theme}  ${
                konamiActive ? 'konami-active' : ''
            } flex flex-col items-center content-center flex-wrap bg-background text-foreground`}
            ref={setStartRef}
        >
            <motion.div
                className='fixed top-0 left-0 right-0 h-1 bg-primary z-50'
                style={{ scaleX }}
            />
            <Header
                theme={theme}
                setTheme={setTheme}
                refs={{
                    startRef,
                    skillsRef,
                    experienceRef,
                    projectsRef,
                    contactRef,
                }}
            />
            <main
                className={`container py-6 max-w-[1200px] px-4  ${
                    konamiActive ? 'konami-active' : ''
                }`}
            >
                <motion.section
                    id='hero'
                    className='py-8 md:py-14'
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Hero
                        name='Ángel Gaudes Martí'
                        subtitle='Toskan4134'
                        alt='Toskan'
                        description='Desarrollador Full Stack apasionado por aprender cosas nuevas. Especializado en Node.js.'
                        imageSrc={yoCartoon}
                        contactRef={contactRef}
                        projectsRef={projectsRef}
                    />
                </motion.section>
                <motion.section
                    id='skills'
                    className='py-8 md:py-14'
                    ref={setSkillsRef}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className='text-3xl font-bold mb-8'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Skills
                    </motion.h2>

                    <motion.div
                        className='mb-6'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className='relative max-w-md'>
                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                            <input
                                type='text'
                                placeholder='Buscar skills...'
                                value={skillSearch}
                                onChange={(e) => setSkillSearch(e.target.value)}
                                className='w-full pl-9 py-2 border border-input justify-center rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent'
                            />
                            {skillSearch && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSkillSearch('')}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground flex items-center justify-center'
                                >
                                </motion.button>
                            )}
                        </div>
                        {skillSearch && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='text-sm text-muted-foreground mt-2'
                            >
                                {filteredSkills.length} skill
                                {filteredSkills.length !== 1 ? 's' : ''}{' '}
                                encontrada
                                {filteredSkills.length !== 1 ? 's' : ''}
                            </motion.p>
                        )}
                    </motion.div>

                    <div className='relative'>
                        {skillSearch ? (
                            filteredSkills.length > 0 ? (
                                <div className='grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                    {filteredSkills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{
                                                duration: 0.2,
                                                delay: index * 0.02,
                                            }}
                                        >
                                            <SkillCard
                                                skill={skill.name}
                                                level={skill.level}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className='text-center pt-12'
                                >
                                    <p className='text-lg text-muted-foreground'>
                                        Aprendiendo nuevas tecnologías para
                                        añadir aquí...
                                    </p>
                                    <p className='text-sm text-muted-foreground mt-2'>
                                        No se encontraron skills que coincidan
                                        con tu búsqueda
                                    </p>
                                </motion.div>
                            )
                        ) : (
                            <>
                                <motion.div
                                    className='grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                                    initial={false}
                                >
                                    {filteredSkills
                                        .slice(0, defaultVisibleSkillsCount)
                                        .map((skill) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <SkillCard
                                                    skill={skill.name}
                                                    level={skill.level}
                                                />
                                            </motion.div>
                                        ))}
                                </motion.div>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: showAllSkills ? 'auto' : 0,
                                        opacity: showAllSkills ? 1 : 0,
                                    }}
                                    transition={{
                                        height: {
                                            duration: 0.4,
                                            ease: 'easeInOut',
                                        },
                                        opacity: {
                                            duration: showAllSkills ? 0.4 : 0.2,
                                            delay: showAllSkills ? 0.1 : 0,
                                        },
                                    }}
                                    style={{
                                        overflow: showAllSkills
                                            ? 'visible'
                                            : 'hidden',
                                    }}
                                >
                                    <motion.div
                                        className='grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'
                                        initial={false}
                                    >
                                        {filteredSkills
                                            .slice(defaultVisibleSkillsCount)
                                            .map((skill, index) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={false}
                                                    animate={
                                                        showAllSkills
                                                            ? {
                                                                  opacity: 1,
                                                                  y: 0,
                                                              }
                                                            : {
                                                                  opacity: 0,
                                                                  y: -10,
                                                              }
                                                    }
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: showAllSkills
                                                            ? index * 0.05
                                                            : 0,
                                                        ease: 'easeOut',
                                                    }}
                                                >
                                                    <SkillCard
                                                        skill={skill.name}
                                                        level={skill.level}
                                                    />
                                                </motion.div>
                                            ))}
                                    </motion.div>
                                </motion.div>
                            </>
                        )}
                    </div>
                    {!skillSearch &&
                        filteredSkills.length > defaultVisibleSkillsCount && (
                            <motion.div
                                className='mt-8 text-center'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        onClick={() => {
                                            const rect =
                                                skillsRef?.getBoundingClientRect();
                                            const scrollTop =
                                                window.pageYOffset ||
                                                document.documentElement
                                                    .scrollTop;

                                            if (
                                                showAllSkills &&
                                                window.pageYOffset >
                                                    rect.top + scrollTop
                                            ) {
                                                skillsRef?.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                            } else if (
                                                !showAllSkills &&
                                                window.pageYOffset <
                                                    rect.top + scrollTop
                                            ) {
                                                skillsRef?.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                            }
                                            toggleSkills();
                                        }}
                                    >
                                        {showAllSkills
                                            ? 'Mostrar menos'
                                            : 'Mostrar más'}
                                    </Button>
                                </motion.div>
                            </motion.div>
                        )}
                </motion.section>

                <motion.section
                    id='projects'
                    className='py-8 md:py-14'
                    ref={setProjectsRef}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className='text-3xl font-bold mb-8'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Proyectos
                    </motion.h2>
                    <motion.div
                        className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                        variants={staggerChildrenSlow}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                    >
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                github={project.github}
                                web={project.web}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className='mt-8 text-center'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button>
                                <Github className='mr-2 h-4 w-4' />
                                <Link
                                    to={
                                        'https://github.com/Toskan4134?tab=repositories'
                                    }
                                >
                                    Ver más
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.section>

                <motion.section
                    id='experience'
                    className='py-8 md:py-14'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    ref={setExperienceRef}
                >
                    <motion.h2
                        className='text-3xl font-bold mb-8'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Experiencia
                    </motion.h2>
                    <motion.div
                        className='space-y-6'
                        variants={staggerChildrenSlow}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                    >
                        {experience.map((job) => (
                            <ExperienceCard
                                key={job.company}
                                position={job.position}
                                company={job.company}
                                period={job.period}
                                description={job.description}
                                website={job.website}
                                location={job.location}
                            />
                        ))}
                    </motion.div>
                </motion.section>

                <motion.section
                    id='contact'
                    className='py-8 md:py-14'
                    ref={setContactRef}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className='text-3xl font-bold mb-8'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Contacto
                    </motion.h2>
                    <motion.div
                        className='grid grid-cols-1 md:grid-cols-2 gap-6'
                        variants={staggerChildrenSlow}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={fadeIn}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                asChild
                                variant='outline'
                                className='w-full'
                            >
                                <Link to='mailto:angama4134@gmail.com'>
                                    <Mail className='mr-2 h-6 w-6' />
                                    angama4134@gmail.com
                                </Link>
                            </Button>
                        </motion.div>
                        <motion.div
                            variants={fadeIn}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                asChild
                                variant='outline'
                                className='w-full'
                            >
                                <Link to='https://github.com/toskan4134'>
                                    <Github className='mr-2 h-6 w-6' />
                                    GitHub
                                </Link>
                            </Button>
                        </motion.div>
                        <motion.div
                            variants={fadeIn}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                asChild
                                variant='outline'
                                className='w-full'
                            >
                                <Link to='https://www.linkedin.com/in/angel-gaudes/'>
                                    <Linkedin className='mr-2 h-6 w-6' />
                                    LinkedIn
                                </Link>
                            </Button>
                        </motion.div>
                        <motion.div
                            variants={fadeIn}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                asChild
                                variant='outline'
                                className='w-full'
                            >
                                <Link to='https://x.com/Toskan4134'>
                                    <TwitterIcon className='mr-2 h-6 w-6' />X /
                                    Twitter
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </main>
            <footer className='border-t py-6'>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
