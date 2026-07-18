import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink, GraduationCap, Trophy } from 'lucide-react';
import { certifications, education } from '../lib/data';
import { ui, useLang } from '../lib/i18n';
import { fadeIn, staggerChildrenSlow } from '../lib/motions';

const Education = () => {
    const { t } = useLang();

    return (
        <div className='grid gap-10 md:grid-cols-2'>
            <div>
                <h3 className='mb-4 flex items-center gap-2 text-xl font-semibold'>
                    <GraduationCap className='h-5 w-5 text-primary' />
                    {t(ui.education.education)}
                </h3>
                <motion.div
                    className='space-y-4 border-l-2 border-primary/30 ml-2 pl-5'
                    variants={staggerChildrenSlow}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                >
                    {education.map((item, i) => (
                        <motion.div key={i} variants={fadeIn} className='relative'>
                            <span className='absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-primary/70 ring-4 ring-primary/15' />
                            <p className='font-medium leading-snug'>
                                {t(item.title)}
                            </p>
                            <p className='text-sm text-muted-foreground'>
                                {item.school} · {item.period}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div>
                <h3 className='mb-4 flex items-center gap-2 text-xl font-semibold'>
                    <Trophy className='h-5 w-5 text-primary' />
                    {t(ui.education.certs)}
                </h3>
                <motion.div
                    className='space-y-3'
                    variants={staggerChildrenSlow}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                >
                    {certifications.map((cert, i) => {
                        const Icon = cert.type === 'award' ? Trophy : BadgeCheck;
                        const body = (
                            <>
                                <Icon className='h-5 w-5 shrink-0 text-primary mt-0.5' />
                                <div className='flex-1'>
                                    <p className='font-medium leading-snug'>
                                        {t(cert.title)}
                                    </p>
                                    <p className='text-sm text-muted-foreground'>
                                        {t(cert.issuer)} · {cert.year}
                                    </p>
                                </div>
                                {cert.url && (
                                    <ExternalLink className='h-4 w-4 text-muted-foreground' />
                                )}
                            </>
                        );
                        const className =
                            'flex items-start gap-3 rounded-xl border bg-card p-4 shadow transition-colors hover:border-primary/60';
                        return (
                            <motion.div key={i} variants={fadeIn} whileHover={{ y: -3 }}>
                                {cert.url ? (
                                    <a
                                        href={cert.url}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={className}
                                    >
                                        {body}
                                    </a>
                                ) : (
                                    <div className={className}>{body}</div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Education;
