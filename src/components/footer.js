import { motion } from 'framer-motion';
import { ui, useLang } from '../lib/i18n';

const Footer = () => {
    const { t } = useLang();

    return (
        <div className='container flex items-center justify-center py-10 md:h-28 md:py-0 px-4'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='flex flex-col items-center gap-1.5 text-center text-sm leading-loose'
            >
                <p>
                    © {new Date().getFullYear()} Ángel Gaudes Martí.{' '}
                    {t(ui.footer.rights)}
                </p>
                <p className='text-muted-foreground'>{t(ui.footer.made)}</p>
                <p className='text-xs text-muted-foreground/50 select-none'>
                    {ui.footer.hint}
                </p>
            </motion.div>
        </div>
    );
};

export default Footer;
