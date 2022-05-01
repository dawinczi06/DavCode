import { FC } from 'react'
import Header from '../ui/Header/Header'
import Footer from '../ui/Footer/Footer'

const Layout: FC = ({ children }) => {
    return (
        <main className="flex min-h-screen w-full flex-col bg-black text-white">
            <div className="mx-auto w-full max-w-screen-xl">
                <Header />
            </div>

            <div className="mx-auto w-full max-w-screen-xl grow">
                {children}
            </div>

            <div className="mx-auto w-full max-w-screen-xl">
                <Footer />
            </div>
        </main>
    )
}

export default Layout
