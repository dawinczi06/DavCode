import { FC } from 'react'
import Tile from '../ui/Tile'
import { motion } from 'framer-motion'

const MySkills: FC = () => {
    const skills: { imgUrl: string; label: string }[] = [
        { imgUrl: '/images/html-logo.png', label: 'HTML' },
        { imgUrl: '/images/css-logo.png', label: 'CSS' },
        { imgUrl: '/images/js-logo.png', label: 'JavaScript' },
        { imgUrl: '/images/ts-logo.png', label: 'TypeScript' },
        { imgUrl: '/images/react-logo.png', label: 'React' },
        { imgUrl: '/images/nextjs-logo.png', label: 'NextJS' },
        { imgUrl: '/images/redux-logo.png', label: 'Redux' },
        { imgUrl: '/images/tailwind-logo.png', label: 'TailwindCSS' },
        { imgUrl: '/images/angular-logo.png', label: 'Angular' },
        { imgUrl: '/images/flutter-logo.png', label: 'Flutter' }
    ]

    const variant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    }

    const tile = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1 }
    }

    return (
        <div id={'skills'} className="-mt-32 pt-32">
            <motion.div
                variants={variant}
                whileInView="show"
                initial="hidden"
                className="relative w-full text-center"
            >
                <img
                    src="/images/cogwheel.png"
                    className="mx-auto h-16 w-16"
                    alt="cogwheel-icon"
                />
                <h2 className="mt-10 text-2xl font-bold uppercase tracking-widest md:text-4xl">
                    My skills
                </h2>
            </motion.div>

            <motion.div
                variants={container}
                whileInView="show"
                initial="hidden"
                className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-10"
            >
                {skills.map((item) => (
                    <motion.div variants={tile} key={item.label}>
                        <Tile imageUrl={item.imgUrl} label={item.label} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default MySkills

const blobStyle = {
    width: 40,
    height: 40,
    borderRadius: 75,
    backgroundColor: '#1d1ef0',
    position: 'absolute'
}
