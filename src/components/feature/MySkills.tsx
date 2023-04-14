import { FC } from 'react'
import Tile from '../ui/Tile'

const MySkills: FC = () => {
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
        <div id={'skills'} className="-mt-32 pt-32">
            <div className="relative w-full text-center">
                <img
                    src="/images/cogwheel.png"
                    className="mx-auto h-16 w-16"
                    alt=""
                />
                <h2 className="mt-10 text-4xl font-bold uppercase tracking-widest">
                    My skills
                </h2>
            </div>

            <div className="mt-20 grid grid-cols-5 gap-10">
                {skills.map((item) => (
                    <Tile
                        imageUrl={item.imgUrl}
                        label={item.label}
                        key={item.label}
                    />
                ))}
            </div>
        </div>
    )
}

export default MySkills
