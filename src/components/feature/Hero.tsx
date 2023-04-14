import { FC } from 'react'
import { ArrowLongDownIcon } from '@heroicons/react/24/outline'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import HeroAnimation from './HeroAnimation'
import Header from '../ui/Header'
const Hero: FC = () => {
    return (
        <div
            className="relative flex min-h-screen flex-1 flex-col items-center px-5 shadow-lg shadow-black md:px-10"
            style={{
                backgroundImage: "url('/images/bg-test.jpg')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <Header />
            <div
                id={'home'}
                className="relative flex h-full w-full max-w-screen-2xl flex-1 flex-col items-center justify-center py-20 lg:space-x-20 xl:flex-row"
            >
                <div className="order-last mt-10 flex w-full flex-col items-center justify-center text-center xl:order-first xl:items-start xl:text-left">
                    <h1 className="text-lg font-bold sm:text-2xl xl:text-3xl">
                        Hello, <span className="text-teal-600">I am</span>
                    </h1>
                    <h2 className="mt-5 -ml-1 text-3xl font-bold sm:text-5xl xl:text-7xl">
                        Dawid Karbowniczek
                    </h2>
                    <p className="text-xl text-teal-600 sm:text-2xl xl:text-3xl">
                        Software Developer
                    </p>
                    <p className="mt-5 text-sm sm:text-base xl:text-lg">
                        Passionate programmer, always keen to embrace new
                        technologies, looking for different solutions.
                    </p>
                    <div className="group relative mt-10 h-12 max-w-max cursor-pointer">
                        <button className="relative z-10 flex h-full items-center space-x-4 rounded bg-teal-600 px-7 text-lg font-bold transition group-hover:bg-teal-700">
                            <span>Projects</span>
                            <ArrowLongRightIcon className="h-6 w-6 transition group-hover:translate-x-2" />
                        </button>
                        <div className="absolute top-2 left-2 h-full w-full rounded border border-teal-600"></div>
                    </div>
                </div>

                <HeroAnimation />
            </div>

            <ArrowLongDownIcon className="absolute bottom-6 h-14 w-14 animate-bounce text-zinc-100 xl:bottom-20" />
        </div>
    )
}

export default Hero
