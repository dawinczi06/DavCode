import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <h1 className="text-6xl font-bold text-white">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
                Next.js!
            </a>
        </h1>
    )
}

export default Home
