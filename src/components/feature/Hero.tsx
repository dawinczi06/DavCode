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
                backgroundImage: "url('/images/bg-test.png')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <Header />
            <div
                id={'home'}
                className="relative flex h-full w-full max-w-screen-2xl flex-1 items-center justify-center space-x-20 pb-20"
            >
                <div className="flex w-full flex-col justify-center text-zinc-300">
                    <h1 className="text-3xl font-bold">
                        Hello, <span className="text-teal-600">I am</span>
                    </h1>
                    <h2 className="mt-5 -ml-1 text-7xl font-bold">
                        Dawid Karbowniczek
                    </h2>
                    <p className="text-3xl text-teal-600">Software Developer</p>
                    <p className="mt-5 text-lg text-gray-200 ">
                        Passionate programmer, always keen to embrace new
                        technologies, looking for different solutions.
                    </p>
                    <div className="group relative mt-10 h-12 max-w-max cursor-pointer">
                        <button className="relative z-10 flex h-full items-center space-x-4 rounded bg-teal-600 px-7 text-lg font-bold transition group-hover:bg-teal-700">
                            <span className="text-zinc-200">Projects</span>
                            <ArrowLongRightIcon className="h-6 w-6 transition group-hover:translate-x-2" />
                        </button>
                        <div className="absolute top-2 left-2 h-full w-full rounded border border-teal-600"></div>
                    </div>
                </div>

                <HeroAnimation />
            </div>

            <ArrowLongDownIcon className="absolute bottom-20 h-14 w-14 animate-bounce text-white" />
        </div>
    )
}

export default Hero
