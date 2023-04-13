import { FC, forwardRef, ForwardRefRenderFunction } from 'react'
import Tile from '../ui/Tile'

const MySkills: ForwardRefRenderFunction<HTMLDivElement> = (
    { children },
    ref
) => {
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
        <div ref={ref}>
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
    )
}

export default forwardRef(MySkills)
