import type { NextPage } from 'next'
import Hero from '../components/feature/Hero'
import MySkills from '../components/feature/MySkills'
import Section from '../components/feature/Section'
import MyExperience from '../components/feature/MyExperience'
import MyProjects from '../components/feature/MyProjects'
import { useRef } from 'react'

const Home: NextPage = () => {
    const ref = useRef<HTMLDivElement>(null)

    return (
        <>
            <Hero />

            <Section>
                <MySkills ref={ref} />
                <MyExperience />
            </Section>

            <MyProjects />
        </>
    )
}

export default Home
