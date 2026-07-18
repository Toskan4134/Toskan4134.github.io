import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, TwitterIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import yoCartoon from '../assets/YoCartoonWide.png';
import { contacts } from '../lib/data';
import { ui, useLang } from '../lib/i18n';
import { Button } from './button';

export const contactIcons = {
    mail: Mail,
    github: Github,
    linkedin: Linkedin,
    twitter: TwitterIcon,
};

function useTypewriter(words) {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        if (!deleting && text === word) {
            const timer = setTimeout(() => setDeleting(true), 1800);
            return () => clearTimeout(timer);
        }
        if (deleting && text === '') {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
            return;
        }
        const timer = setTimeout(
            () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
            deleting ? 40 : 90
        );
        return () => clearTimeout(timer);
    }, [text, deleting, index, words]);

    return text;
}

const Hero = () => {
    const { lang, t } = useLang();
    const typed = useTypewriter(ui.hero.roles[lang]);

    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-around gap-6'>
            <div className='text-center'>
                <motion.div
                    className='inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4'
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <span className='relative flex h-2 w-2'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
                        <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
                    </span>
                    {t(ui.hero.badge)}
                </motion.div>
                <motion.p
                    className='text-lg text-muted-foreground'
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {t(ui.hero.greeting)}
                </motion.p>
                <motion.h1
                    className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent pb-1'
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Ángel Gaudes Martí
                </motion.h1>
                <h5 className='mt-1 font-bold md:text-xl text-primary'>
                    @Toskan4134
                </h5>
                <p className='mt-4 text-xl md:text-2xl font-mono min-h-[2rem]'>
                    {typed}
                    <span className='text-primary animate-pulse'>|</span>
                </p>
                <motion.p
                    className='mt-4 max-w-[600px] text-muted-foreground md:text-xl'
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {t(ui.hero.description)}
                </motion.p>
                <motion.div
                    className='mt-6 flex space-x-4 justify-center'
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button asChild>
                            <a href='#contact'>{t(ui.hero.contactMe)}</a>
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button asChild variant='outline'>
                            <a href='#projects'>{t(ui.hero.viewProjects)}</a>
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className='mt-6 flex justify-center gap-2'
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {contacts.map((contact) => {
                        const Icon = contactIcons[contact.icon];
                        return (
                            <motion.a
                                key={contact.url}
                                href={contact.url}
                                target='_blank'
                                rel='noreferrer'
                                aria-label={contact.label}
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='p-2 text-muted-foreground hover:text-primary transition-colors'
                            >
                                <Icon className='h-5 w-5' />
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
            >
                <motion.div
                    className='relative'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className='absolute inset-0 m-auto h-56 w-56 rounded-full bg-primary/25 blur-3xl animate-float' />
                    <img
                        src={yoCartoon}
                        alt='Toskan'
                        width={350}
                        height={350}
                        className='relative p-4 animate-float'
                        style={{
                            maskImage:
                                'linear-gradient(black 80%, transparent 100%)',
                        }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
