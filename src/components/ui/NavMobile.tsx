import { FC } from 'react'
import Button from './Button'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
    navItems: string[]
    onClose: () => void
}

const NavMobile: FC<Props> = (props) => {
    const variant = {
        hidden: {
            opacity: 0,
            x: '100%'
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            x: '100%',
            transition: {
                duration: 0.3
            }
        }
    }

    const container = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const listItem = {
        hidden: {
            opacity: 0,
            scale: 1.2
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <motion.div
            key={'test'}
            variants={variant}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed top-0 left-0 z-50 flex h-screen w-full flex-col bg-zinc-900 p-10 text-zinc-300"
        >
            <div className="flex justify-center">
                <Logo />
            </div>

            <div className="absolute right-3 top-5 h-12 w-12">
                <Button onClick={() => props.onClose?.()} variant="blank">
                    <XMarkIcon className="h-7 w-7" />
                </Button>
            </div>

            <nav className="mt-10">
                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="divide-y divide-zinc-500"
                >
                    {props.navItems.map((item) => (
                        <motion.li
                            variants={listItem}
                            className="text-xl font-bold hover:text-teal-600"
                        >
                            <Link
                                href={`#${item}`}
                                className="flex h-12 w-full items-center capitalize"
                            >
                                {item}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </nav>
        </motion.div>
    )
}

export default NavMobile
