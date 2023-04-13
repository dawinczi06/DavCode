import type { NextPage } from 'next'
import Hero from '../components/feature/Hero'
import MySkills from '../components/feature/MySkills'
import Section from '../components/feature/Section'
import MyExperience from '../components/feature/MyExperience'
import MyProjects from '../components/feature/MyProjects'

const Home: NextPage = () => {
    return (
        <>
            <Hero />

            <Section>
                <MySkills />
                <MyExperience />
            </Section>

            <MyProjects />
        </>
    )
}

export default Home
