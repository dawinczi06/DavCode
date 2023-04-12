import { NextPage } from 'next'

const AboutMe: NextPage = () => {
    return (
        <div className="mt-10 grid grid-cols-2 gap-x-10">
            <div className="h-[600px] overflow-hidden rounded-2xl border border-gray-500 shadow-lg shadow-black">
                <img
                    className="h-full w-full object-cover"
                    src={'images/dav-photo.png'}
                    alt=""
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold">Dawid Karbowniczek</h2>
                <p className="italic">Software developer</p>
            </div>
        </div>
    )
}

export default AboutMe
