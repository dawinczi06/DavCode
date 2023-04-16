import { motion } from 'framer-motion'
import { FC } from 'react'

const MyProjects: FC = () => {
    const variant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <section
            id={'projects'}
            className="w-full border-b border-b-zinc-800 bg-zinc-900 px-5 py-40 md:px-10"
        >
            <motion.div
                variants={variant}
                initial="hidden"
                whileInView="show"
                className="mx-auto -mt-32 flex max-w-screen-2xl flex-col items-center justify-center pt-32 "
            >
                <img
                    src="/images/light-bulb.png"
                    className="mx-auto h-16 w-16"
                    alt="light-bulb-icon"
                />
                <h2 className="mt-10 text-center text-2xl font-bold uppercase tracking-widest md:text-4xl ">
                    My Projects
                </h2>
            </motion.div>
        </section>
    )
}

export default MyProjects
