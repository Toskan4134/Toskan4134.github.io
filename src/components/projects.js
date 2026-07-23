import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../lib/data';
import { ui, useLang } from '../lib/i18n';
import { fadeIn, staggerChildrenSlow } from '../lib/motions';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

const linkIcons = {
    github: Github,
    external: ExternalLink,
    download: Download,
};

const ProjectCard = ({ project, t }) => (
    <motion.div variants={fadeIn} whileHover={{ y: -6 }} className='h-full'>
        <Card className='group flex flex-col h-full overflow-hidden'>
            <div className='relative h-56 shrink-0 overflow-hidden'>
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                ) : (
                    <div className='h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/10 to-transparent'>
                        <span className='text-7xl font-black text-primary/40 select-none'>
                            {project.title[0]}
                        </span>
                    </div>
                )}
                {project.featured && (
                    <span className='absolute top-3 right-3 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow'>
                        <Star className='h-3 w-3 fill-current' />
                        {t(ui.projects.featured)}
                    </span>
                )}
            </div>
            <CardHeader className='pb-4'>
                <div className='flex items-baseline justify-between gap-2'>
                    <CardTitle>{project.title}</CardTitle>
                    {project.period && (
                        <span className='text-xs text-muted-foreground whitespace-nowrap'>
                            {t(project.period)}
                        </span>
                    )}
                </div>
                <CardDescription className='line-clamp-4'>
                    {t(project.description)}
                </CardDescription>
            </CardHeader>
            <CardContent className='mt-auto space-y-4'>
                {project.tags?.length > 0 && (
                    <div className='flex flex-wrap gap-1.5'>
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className='rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <div className='flex flex-wrap gap-3'>
                    {project.links?.map((link) => {
                        const Icon = linkIcons[link.icon] ?? ExternalLink;
                        return (
                            <motion.div
                                key={link.url}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button asChild variant='outline' size='sm' className='bg-transparent'>
                                    <a
                                        href={link.url}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <Icon className='mr-2 h-4 w-4' />
                                        {t(link.label)}
                                    </a>
                                </Button>
                            </motion.div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

const Projects = () => {
    const { t } = useLang();

    return (
        <>
            <motion.div
                className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                variants={staggerChildrenSlow}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} t={t} />
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
                    className='inline-block'
                >
                    <Button asChild>
                        <a
                            href='https://github.com/Toskan4134?tab=repositories'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Github className='mr-2 h-4 w-4' />
                            {t(ui.projects.viewMore)}
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Projects;
