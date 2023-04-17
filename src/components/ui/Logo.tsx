import { FC } from 'react'
import Link from 'next/link'

const Logo: FC = () => {
    return (
        <div>
            <Link
                href={'/'}
                className="text-xl font-bold uppercase sm:text-3xl"
            >
                <span className="text-zinc-100">Dav</span>
                <span className="text-teal-600">Code</span>
            </Link>
        </div>
    )
}

export default Logo
