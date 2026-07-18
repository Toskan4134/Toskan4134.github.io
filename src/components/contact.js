import { motion } from 'framer-motion';
import { contacts } from '../lib/data';
import { ui, useLang } from '../lib/i18n';
import { fadeIn, staggerChildrenSlow } from '../lib/motions';
import { Button } from './button';
import { contactIcons } from './hero';

const Contact = () => {
    const { t } = useLang();

    return (
        <>
            <motion.p
                className='mb-6 text-muted-foreground'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {t(ui.contact.blurb)}
            </motion.p>
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
                variants={staggerChildrenSlow}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
            >
                {contacts.map((contact) => {
                    const Icon = contactIcons[contact.icon];
                    return (
                        <motion.div
                            key={contact.url}
                            variants={fadeIn}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button asChild variant='outline' className='w-full'>
                                <a
                                    href={contact.url}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Icon className='mr-2 h-6 w-6' />
                                    {contact.label}
                                </a>
                            </Button>
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    );
};

export default Contact;
