import { FC, useEffect, useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import { useScroll } from 'framer-motion'
import cx from 'classnames'

const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.substr(1)

const clamp = (value: number) => Math.max(0, value)

const isBetween = (value: number, floor: number, ceil: number) =>
    value >= floor && value <= ceil

// hooks
const useScrollspy = (ids: string[], offset: number = 0) => {
    const [activeId, setActiveId] = useState('')

    useLayoutEffect(() => {
        const listener = () => {
            const scroll = window.scrollY

            const position = ids
                .map((id) => {
                    const element = document.getElementById(id)

                    if (!element) return { id, top: -1, bottom: -1 }

                    const rect = element.getBoundingClientRect()
                    const top = clamp(rect.top + scroll - offset)
                    const bottom = clamp(rect.bottom + scroll - offset)

                    return { id, top, bottom }
                })
                .find(({ top, bottom }) => isBetween(scroll, top, bottom))

            setActiveId(position?.id || '')
        }

        listener()

        window.addEventListener('resize', listener)
        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('resize', listener)
            window.removeEventListener('scroll', listener)
        }
    }, [ids, offset])

    return activeId
}
const Header: FC = () => {
    const ids = ['home', 'skills', 'experience', 'projects', 'contact']
    const activeId = useScrollspy(ids, 80)

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
            className={cx('fixed top-0 z-20 w-full', {
                'border-b border-b-zinc-800 bg-zinc-900 shadow-lg shadow-black':
                    isFollowing
            })}
        >
            <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between">
                <div>
                    <Link href={'/'}>
                        <a className="text-3xl font-bold uppercase">
                            <span className="text-gray-50">Dav</span>
                            <span className="text-teal-600">Code</span>
                        </a>
                    </Link>
                </div>
                <ul className="flex space-x-8 text-sm font-bold uppercase text-gray-300">
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
                    <button className="h-10 rounded bg-teal-600 px-5 text-sm font-bold uppercase hover:bg-teal-700">
                        Download CV
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
