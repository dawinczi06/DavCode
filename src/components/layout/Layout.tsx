import { FC } from 'react'
import Footer from '../ui/Footer'
import { AnimatePresence } from 'framer-motion'
import { useAppContext } from '../../providers/AppContextProvider'
import ToastBar from '../ui/ToastBar'

const Layout: FC = ({ children }) => {
    const { toast } = useAppContext()

    return (
        <>
            <div className="flex min-h-screen w-full flex-1 flex-col bg-cover text-zinc-100">
                <main className="flex flex-1 flex-col">{children}</main>
                <Footer />
            </div>
            <AnimatePresence>
                {toast?.message && (
                    <ToastBar message={toast.message} type={toast.type} />
                )}
            </AnimatePresence>
        </>
    )
}

export default Layout
