import { FC } from 'react'
import Footer from '../ui/Footer'

const Layout: FC = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full flex-1 flex-col bg-cover text-zinc-100">
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
