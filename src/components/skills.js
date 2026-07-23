import { motion } from 'framer-motion';
import {
    ChevronDown,
    Cloud,
    Database,
    Monitor,
    Search,
    Server,
    Sparkles,
    Wrench,
    X,
} from 'lucide-react';
import { useState } from 'react';
import { skillCategories, skills } from '../lib/data';
import { ui, useLang } from '../lib/i18n';
import { Button } from './button';

const categoryIcons = {
    all: Sparkles,
    frontend: Monitor,
    backend: Server,
    data: Database,
    devops: Cloud,
    tools: Wrench,
};

const SkillChip = ({ skill, t }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className='rounded-xl border bg-card p-4 shadow transition-colors hover:border-primary/60'
    >
        <div className='flex items-baseline justify-between gap-2 mb-2'>
            <p className='font-semibold truncate'>{skill.name}</p>
            <p className='text-xs text-muted-foreground whitespace-nowrap'>
                {t(ui.skills.levels[skill.level])}
            </p>
        </div>
        <div className='h-1.5 rounded-full bg-muted overflow-hidden'>
            <motion.div
                className='h-full rounded-full bg-gradient-to-r from-primary/60 to-primary'
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level * 25}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
        </div>
    </motion.div>
);

const Skills = () => {
    const { t } = useLang();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [expanded, setExpanded] = useState(false);

    const query = search.trim().toLowerCase();
    const matches = (skill) =>
        [
            skill.name,
            ...(skill.aliases ?? []),
            ...(skill.tags ?? []),
            ...(skill.related ?? []),
        ].some((term) => term.toLowerCase().includes(query)) ||
        skills.some(
            (other) =>
                other.name.toLowerCase().includes(query) &&
                other.related?.includes(skill.name)
        );
    const directMatch = (skill) =>
        skill.name.toLowerCase().includes(query) ||
        !!skill.aliases?.some((alias) => alias.toLowerCase().includes(query));

    const filtered = skills
        .filter((skill) => category === 'all' || skill.category === category)
        .filter((skill) => !query || matches(skill))
        .sort(
            (a, b) =>
                (query ? directMatch(b) - directMatch(a) : 0) ||
                b.level - a.level ||
                a.name.localeCompare(b.name)
        );

    const collapsible = !query && filtered.length > 8;
    const collapsed = collapsible && !expanded;

    return (
        <>
            <div className='relative max-w-md mb-4'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                <input
                    type='text'
                    placeholder={t(ui.skills.search)}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full pl-9 pr-9 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent'
                />
                {search && (
                    <button
                        onClick={() => setSearch('')}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground'
                    >
                        <X className='h-4 w-4' />
                    </button>
                )}
            </div>

            <div className='flex flex-wrap gap-2 mb-6'>
                {[{ id: 'all', label: ui.skills.all }, ...skillCategories].map(
                    (cat) => {
                        const Icon = categoryIcons[cat.id];
                        const active = category === cat.id;
                        return (
                            <motion.button
                                key={cat.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setCategory(cat.id)}
                                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                                    active
                                        ? 'border-primary bg-primary text-primary-foreground'
                                        : 'bg-background hover:border-primary/60 hover:bg-accent hover:text-primary'
                                }`}
                            >
                                <Icon className='h-3.5 w-3.5' />
                                {t(cat.label)}
                            </motion.button>
                        );
                    }
                )}
            </div>

            {query && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-sm text-muted-foreground mb-4'
                >
                    {filtered.length}{' '}
                    {t(filtered.length === 1 ? ui.skills.result : ui.skills.results)}
                </motion.p>
            )}

            {filtered.length > 0 ? (
                <>
                    <div className='relative'>
                        <motion.div
                            className='overflow-hidden -mt-2 pt-2'
                            initial={false}
                            animate={{ height: collapsed ? 200 : 'auto' }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <div className='grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                {filtered.map((skill) => (
                                    <SkillChip
                                        key={skill.name}
                                        skill={skill}
                                        t={t}
                                    />
                                ))}
                            </div>
                        </motion.div>
                        {collapsed && (
                            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent' />
                        )}
                    </div>
                    {collapsible && (
                        <div className='mt-6 text-center'>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='inline-block'
                            >
                                <Button
                                    variant='outline'
                                    onClick={() => {
                                        if (expanded) {
                                            document
                                                .getElementById('skills')
                                                ?.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                        }
                                        setExpanded(!expanded);
                                    }}
                                >
                                    {t(
                                        expanded
                                            ? ui.skills.showLess
                                            : ui.skills.showMore
                                    )}
                                    <ChevronDown
                                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                                            expanded ? 'rotate-180' : ''
                                        }`}
                                    />
                                </Button>
                            </motion.div>
                        </div>
                    )}
                </>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center py-12'
                >
                    <p className='text-lg text-muted-foreground'>
                        {t(ui.skills.empty)}
                    </p>
                    <p className='text-sm text-muted-foreground mt-2'>
                        {t(ui.skills.emptyHint)}
                    </p>
                </motion.div>
            )}
        </>
    );
};

export default Skills;
