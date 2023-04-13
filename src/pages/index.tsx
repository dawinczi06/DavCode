import type { NextPage } from 'next'
import Hero from '../components/feature/Hero'
import MySkills from '../components/feature/MySkills'
import Section from '../components/feature/Section'
import MyExperience from '../components/feature/MyExperience'
import MyProjects from '../components/feature/MyProjects'
import { useRef } from 'react'
import Contact from '../components/feature/Contact'

const Home: NextPage = () => {
    const mySkillsRef = useRef<HTMLDivElement>(null)
    const myExpRef = useRef<HTMLDivElement>(null)
    const myProjectsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <Hero
                menuRefs={[mySkillsRef, myExpRef, myProjectsRef, contactRef]}
            />

            <Section>
                <MySkills ref={mySkillsRef} />
                <MyExperience ref={myExpRef} />
            </Section>

            <MyProjects ref={myProjectsRef} />
            <Contact ref={contactRef} />
        </>
    )
}

export default Home
