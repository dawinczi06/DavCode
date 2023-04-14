import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useScroll } from 'framer-motion'
import cx from 'classnames'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.substring(1)

const Header: FC = () => {
    const ids = ['home', 'skills', 'experience', 'projects', 'contact']
    const activeId = useScrollSpy(ids, 80)

    const { scrollY } = useScroll()

    const [isFollowing, setIsFollowing] = useState<boolean>(scrollY.get() > 200)

    useEffect(() => {
        const updateHeader = () => {
            scrollY.get() > 200 ? setIsFollowing(true) : setIsFollowing(false)
        }

        const unsubscribeY = scrollY.on('change', updateHeader)

        return () => {
            unsubscribeY()
        }
    }, [scrollY])

    return (
        <header
            className={cx('fixed top-0 z-20 w-full px-5 md:px-10', {
                'border-b border-b-zinc-800 bg-zinc-900 shadow-lg shadow-black':
                    isFollowing
            })}
        >
            <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between">
                <div>
                    <Link href={'/'}>
                        <a className="text-3xl font-bold uppercase">
                            <span className="text-zinc-100">Dav</span>
                            <span className="text-teal-600">Code</span>
                        </a>
                    </Link>
                </div>
                <ul className="flex space-x-8 text-sm font-bold uppercase text-zinc-100">
                    {ids.map((id) => (
                        <li
                            key={id}
                            className={cx(
                                'cursor-pointer hover:text-teal-600 hover:underline hover:underline-offset-8',
                                id === activeId &&
                                    'text-teal-600 underline underline-offset-8 '
                            )}
                        >
                            <a href={`#${id}`}>{capitalize(id)}</a>
                        </li>
                    ))}
                </ul>
                <div>
                    <button className="h-10 rounded bg-teal-700 px-5 text-sm font-bold uppercase hover:bg-teal-600">
                        Download CV
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
