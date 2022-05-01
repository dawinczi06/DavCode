import { FC } from 'react'
import Link from 'next/link'
import { generalRoutes } from '../../../routes/general-routes'

const Header: FC = () => {
    return (
        <header className="flex justify-center py-5">
            <div className="flex items-center space-x-5">
                <Link href={generalRoutes.projects.path}>
                    <a className="text-3xl font-bold hover:text-amber-400">
                        {generalRoutes.projects.title}
                    </a>
                </Link>
                <Link href={'/'}>
                    <a className="text-4xl font-bold hover:text-amber-400">
                        DavCode
                    </a>
                </Link>
                <Link href={generalRoutes.aboutMe.path}>
                    <a className="text-3xl font-bold hover:text-amber-400">
                        {generalRoutes.aboutMe.title}
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header
