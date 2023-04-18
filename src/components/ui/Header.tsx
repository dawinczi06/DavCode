import { FC, useEffect, useState } from 'react'
import { AnimatePresence, useScroll } from 'framer-motion'
import cx from 'classnames'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import useIsMobile from '../../hooks/useIsMobile'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Button from './Button'
import NavMobile from './NavMobile'
import Logo from './Logo'
import { useRouter } from 'next/router'
import Modal from '../feature/Modal'
import PDFViewer from '../feature/PdfViewer'

const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.substring(1)

const Header: FC = () => {
    const router = useRouter()
    const ids = ['home', 'skills', 'experience', 'projects', 'contact']
    const activeId = useScrollSpy(ids, 80)
    const isMobile = useIsMobile(1024)

    const { scrollY } = useScroll()

    const [pdfModalOpened, setPdfModalOpened] = useState<boolean>(false)
    const [isFollowing, setIsFollowing] = useState<boolean>(scrollY.get() > 0)
    const [isNavMobileOpened, setIsNavMobileOpened] = useState(false)

    useEffect(() => {
        const updateHeader = () => {
            scrollY.get() > 0 ? setIsFollowing(true) : setIsFollowing(false)
        }

        const unsubscribeY = scrollY.on('change', updateHeader)

        return () => {
            unsubscribeY()
        }
    }, [scrollY])

    useEffect(() => {
        setIsNavMobileOpened(false)
    }, [router])

    return (
        <header
            className={cx('fixed top-0 z-20 w-full px-5 md:px-10', {
                'border-b border-b-zinc-800 bg-zinc-900 shadow-lg shadow-black':
                    isFollowing
            })}
        >
            <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between">
                <Logo />
                <ul className="hidden space-x-8 text-sm font-bold uppercase text-zinc-100 lg:flex">
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
                <div className="hidden lg:block">
                    <Button onClick={() => setPdfModalOpened(true)}>
                        Open CV
                    </Button>
                </div>
                {isMobile && (
                    <div>
                        <Button
                            onClick={() => setIsNavMobileOpened(true)}
                            variant={'blank'}
                        >
                            <Bars3Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                        </Button>
                    </div>
                )}
            </div>
            <AnimatePresence>
                {isNavMobileOpened && (
                    <NavMobile
                        navItems={ids}
                        onClose={() => setIsNavMobileOpened(false)}
                    />
                )}
            </AnimatePresence>

            {pdfModalOpened && (
                <Modal>
                    <PDFViewer onClose={() => setPdfModalOpened(false)} />
                </Modal>
            )}
        </header>
    )
}

export default Header
