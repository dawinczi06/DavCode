import { FC } from 'react'

const Footer: FC = () => {
    return (
        <div className="w-full bg-black px-5 md:px-10">
            <div className="mx-auto max-w-screen-2xl py-5 text-center text-sm">
                <span>
                    Copyright &copy; {new Date(Date.now()).getFullYear()} Dawid
                    Karbowniczek
                </span>
            </div>
        </div>
    )
}

export default Footer
