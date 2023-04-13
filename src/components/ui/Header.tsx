import { FC, RefObject, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useScroll } from 'framer-motion'
import cx from 'classnames'

type Props = {
    menuRefs: RefObject<HTMLDivElement>[]
}
const Header: FC<Props> = ({ menuRefs }) => {
    const ids = ['home', 'skills', 'experience', 'projects', 'contact']

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

    const scrollFunction = useCallback(
        (elementRef: RefObject<HTMLDivElement>) => {
            if (elementRef && elementRef.current) {
                const yOffset = -120
                const y =
                    elementRef.current.getBoundingClientRect().top +
                    window.scrollY +
                    yOffset

                window.scrollTo({ top: y, behavior: 'smooth' })
            }
        },
        []
    )

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
                    <li
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        className="cursor-pointer text-teal-600 underline underline-offset-8 hover:text-teal-600 hover:underline hover:underline-offset-8"
                    >
                        Home
                    </li>

                    <li
                        onClick={() => scrollFunction(menuRefs[0])}
                        className="cursor-pointer hover:text-teal-600 hover:underline hover:underline-offset-8"
                    >
                        Skills
                    </li>

                    <li
                        onClick={() => scrollFunction(menuRefs[1])}
                        className="cursor-pointer hover:text-teal-600 hover:underline hover:underline-offset-8"
                    >
                        Experience
                    </li>

                    <li
                        onClick={() => scrollFunction(menuRefs[2])}
                        className="cursor-pointer hover:text-teal-600 hover:underline hover:underline-offset-8"
                    >
                        Projects
                    </li>

                    <li
                        onClick={() => scrollFunction(menuRefs[3])}
                        className="hover: cursor-pointer underline-offset-8 hover:text-teal-600 hover:underline"
                    >
                        Contact
                    </li>
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
