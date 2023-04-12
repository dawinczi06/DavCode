import type { NextPage } from 'next'
import Hero from '../components/feature/Hero'
import Tile from '../components/ui/Tile'

const Home: NextPage = () => {
    const skills: { imgUrl: string; label: string }[] = [
        { imgUrl: '/images/html-logo.png', label: 'HTML' },
        { imgUrl: '/images/css-logo.png', label: 'CSS' },
        { imgUrl: '/images/js-logo.png', label: 'JavaScript' },
        { imgUrl: '/images/ts-logo.png', label: 'TypeScript' },
        { imgUrl: '/images/react-logo.png', label: 'React' },
        { imgUrl: '/images/nextjs-logo.png', label: 'NextJS' },
        { imgUrl: '/images/redux-logo.png', label: 'Redux' },
        { imgUrl: '/images/tailwind-logo.png', label: 'TailwindCSS' },
        { imgUrl: '/images/angular-logo.png', label: 'Angular' },
        { imgUrl: '/images/flutter-logo.png', label: 'Flutter' }
    ]

    return (
        <>
            <Hero />
            <div className="w-full bg-zinc-900 px-5 py-40 md:px-10">
                <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center">
                    <div className="relative w-full text-center">
                        <h2 className="text-4xl font-bold uppercase tracking-widest">
                            My skills
                        </h2>
                    </div>

                    <div className="mt-20 grid grid-cols-5 gap-10">
                        {skills.map((item) => (
                            <Tile imageUrl={item.imgUrl} label={item.label} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full bg-black px-5 py-40 md:px-10">
                <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold uppercase tracking-widest">
                        Experience
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Home
