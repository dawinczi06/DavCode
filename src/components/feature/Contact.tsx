import { FC } from 'react'

const Contact: FC = () => {
    return (
        <section
            id={'contact'}
            className="w-full border-b border-b-zinc-900 bg-zinc-800 px-5 py-40 md:px-10"
        >
            <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center space-y-40">
                <h2 className="-mt-32 pt-32 text-center text-4xl font-bold uppercase tracking-widest">
                    Contact
                </h2>
            </div>
        </section>
    )
}

export default Contact
