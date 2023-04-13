import { FC } from 'react'

const MyProjects: FC = () => {
    return (
        <section className="w-full border-b border-b-zinc-800 bg-zinc-900 px-5 py-40 md:px-10">
            <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center space-y-40">
                <h2 className="text-center text-4xl font-bold uppercase tracking-widest">
                    My Projects
                </h2>
            </div>
        </section>
    )
}

export default MyProjects
