import { motion } from 'framer-motion';
import { Globe, MapPin } from 'lucide-react';
import { experience } from '../lib/data';
import { useLang } from '../lib/i18n';
import { fadeIn, staggerChildrenSlow } from '../lib/motions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

const Experience = () => {
    const { t } = useLang();

    return (
        <motion.div
            className='relative ml-2 space-y-10 border-l-2 border-primary/30 pl-6 md:pl-8'
            variants={staggerChildrenSlow}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
        >
            {experience.map((job) => (
                <motion.div key={job.company} variants={fadeIn} className='relative'>
                    <span className='absolute -left-[33px] md:-left-[41px] top-7 flex h-4 w-4'>
                        {job.current && (
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60' />
                        )}
                        <span className='relative inline-flex h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20' />
                    </span>
                    <Card className='transition-colors hover:border-primary/50'>
                        <CardHeader>
                            <div className='flex flex-wrap items-baseline justify-between gap-2'>
                                <CardTitle>{t(job.position)}</CardTitle>
                                <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary whitespace-nowrap'>
                                    {t(job.period)}
                                </span>
                            </div>
                            <CardDescription className='font-medium'>
                                {job.company}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            {job.entries.map((entry, i) => (
                                <div key={i}>
                                    {entry.title && (
                                        <h4 className='mb-1.5 text-sm font-semibold text-primary'>
                                            {t(entry.title)}
                                        </h4>
                                    )}
                                    <ul className='space-y-1 text-sm'>
                                        {entry.points.map((point, j) => (
                                            <li key={j} className='flex gap-2'>
                                                <span className='text-primary'>—</span>
                                                <span>{t(point)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            {job.tech?.length > 0 && (
                                <div className='flex flex-wrap gap-1.5 pt-1'>
                                    {job.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className='rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <div className='flex flex-wrap gap-4 pt-1 text-sm text-muted-foreground'>
                                <a
                                    href={job.website}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='flex items-center hover:text-primary hover:underline'
                                >
                                    <Globe className='mr-2 h-4 w-4' />
                                    {job.website}
                                </a>
                                <span className='flex items-center'>
                                    <MapPin className='mr-2 h-4 w-4' />
                                    {t(job.location)}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Experience;
