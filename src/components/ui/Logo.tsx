import { FC } from 'react'
import Link from 'next/link'

const Logo: FC = () => {
    return (
        <div>
            <Link
                href={'/'}
                className="flex h-8 items-center space-x-2 text-xl font-bold uppercase sm:text-3xl"
            >
                <img
                    src={'/images/logo.svg'}
                    alt=""
                    className="h-full w-full"
                />
                <p>
                    <span className="text-violet-500">Dav</span>
                    <span className="text-teal-600">Code</span>
                </p>
            </Link>
        </div>
    )
}

export default Logo
