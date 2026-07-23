import { motion } from 'framer-motion';
import { Languages, Menu, Moon, Sun } from 'lucide-react';
import logob from '../assets/logob.png';
import logow from '../assets/logow.png';
import { ui, useLang } from '../lib/i18n';
import { Button } from './button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './sheet';

const navItems = [
    { id: 'skills', label: ui.nav.skills },
    { id: 'projects', label: ui.nav.projects },
    { id: 'experience', label: ui.nav.experience },
    { id: 'education', label: ui.nav.education },
    { id: 'contact', label: ui.nav.contact },
];

const Header = ({ theme, setTheme }) => {
    const { lang, setLang, t } = useLang();

    const NavLink = ({ id, children, isMenu = false }) => (
        <motion.a
            href={`#${id}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer text-left text-sm font-medium transition-colors hover:text-primary ${
                isMenu ? 'origin-left' : 'origin-center'
            }`}
        >
            {children}
        </motion.a>
    );

    return (
        <header className='sticky top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full px-4'>
            <nav className='flex h-14 items-center'>
                <a href='#hero' className='mr-6 flex items-center space-x-2'>
                    <motion.img
                        src={theme === 'dark' ? logow : logob}
                        alt='Toskan'
                        width={32}
                        height={32}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </a>
                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <div className='hidden md:flex space-x-4'>
                        {navItems.map((item) => (
                            <NavLink key={item.id} id={item.id}>
                                {t(item.label)}
                            </NavLink>
                        ))}
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button
                            variant='ghost'
                            size='sm'
                            aria-label='Toggle language'
                            className='gap-1.5 px-2 font-semibold'
                            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                        >
                            <Languages className='h-4 w-4' />
                            {lang.toUpperCase()}
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button
                            variant='ghost'
                            size='icon'
                            aria-label='Toggle theme'
                            className='w-9 px-0'
                            onClick={() =>
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }
                        >
                            <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                            <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                        </Button>
                    </motion.div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button
                                    variant='ghost'
                                    size='icon'
                                    className='md:hidden'
                                >
                                    <Menu className='h-5 w-5' />
                                    <span className='sr-only'>Menu</span>
                                </Button>
                            </motion.div>
                        </SheetTrigger>
                        <SheetContent
                            side='right'
                            style={{
                                backgroundColor:
                                    theme === 'dark' ? '#0a0a0a' : '#fff',
                                color: theme === 'dark' ? '#ededed' : '#171717',
                                border: 0,
                            }}
                        >
                            <SheetHeader>
                                <SheetTitle
                                    style={{
                                        color:
                                            theme === 'dark'
                                                ? '#ededed'
                                                : '#171717',
                                    }}
                                >
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            <nav className='flex flex-col space-y-4 mt-4'>
                                {navItems.map((item) => (
                                    <SheetClose key={item.id} className='text-left'>
                                        <NavLink id={item.id} isMenu>
                                            {t(item.label)}
                                        </NavLink>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Header;
