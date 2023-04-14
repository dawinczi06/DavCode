import { FC, PropsWithChildren } from 'react'
const Section: PropsWithChildren<FC> = ({ children }) => {
    return (
        <section
            className="w-full border-b border-b-zinc-800 bg-zinc-900 px-5 py-40 md:px-10"
            style={{
                backgroundImage: 'url("/images/hero-2.jpg")',
                backgroundSize: 'cover'
            }}
        >
            <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center space-y-8">
                {children}
            </div>
        </section>
    )
}

export default Section
