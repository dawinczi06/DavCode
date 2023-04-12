import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
    return (
        <header className="w-full">
            <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between">
                <div>
                    <Link href={'/'}>
                        <a className="text-3xl font-bold uppercase">
                            <span className="text-gray-50">Dav</span>
                            <span className="text-teal-600">Code</span>
                        </a>
                    </Link>
                </div>
                <div className="flex space-x-8 text-sm font-bold uppercase text-gray-300">
                    <Link href={'/'}>
                        <a className="text-teal-600 underline underline-offset-8 hover:text-teal-600 hover:underline hover:underline-offset-8">
                            Home
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className="hover: underline-offset-8 hover:text-teal-600 hover:underline">
                            Skills
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className="hover:text-teal-600 hover:underline hover:underline-offset-8">
                            Experience
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className="hover:text-teal-600 hover:underline hover:underline-offset-8">
                            Projects
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className="hover: underline-offset-8 hover:text-teal-600 hover:underline">
                            Contact
                        </a>
                    </Link>
                </div>
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
