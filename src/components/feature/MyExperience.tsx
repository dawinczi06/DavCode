import { FC } from 'react'
import TimelineTile from './TimelineTile'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const MyExperience: FC = () => {
    const variant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3
            }
        }
    }

    const tile = {
        hidden: { opacity: 0, scale: 0 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <div id={'experience'} className="pt-32">
            <motion.div variants={variant} initial="hidden" whileInView="show">
                <img
                    src="/images/book.png"
                    className="mx-auto h-16 w-16"
                    alt=""
                />
                <h2 className="mt-10 text-center text-2xl font-bold uppercase tracking-widest md:text-4xl">
                    Experience & Education
                </h2>
            </motion.div>

            <motion.div
                variants={container}
                whileInView="show"
                initial="hidden"
                className="mt-20"
            >
                <motion.div variants={tile}>
                    <TimelineTile
                        isFirst={true}
                        isLast={false}
                        years={'2021 - present'}
                    >
                        <div className="flex items-center space-x-5">
                            <BriefcaseIcon className="h-10 w-10" />
                            <div>
                                <h3 className="text-xl font-bold uppercase">
                                    Software Developer
                                </h3>
                                <p className="text-sm text-teal-600">
                                    FHK technology | United Kingdom
                                </p>
                            </div>
                        </div>

                        <ul className="mt-5 list-inside list-disc space-y-1 text-sm">
                            <li>
                                Implementing new features, components and logic
                                based on Adobe XD designs.
                            </li>
                            <li>
                                Maintaining the code, reacting on issues,
                                implementing changes/suggestions.
                            </li>
                            <li>
                                Using React + Next.JS with Tailwind CSS
                                framework and TypeScript for most projects.
                            </li>
                            <li>
                                Preparing infrastructure for API requests with
                                OpenAPI and SWR.
                            </li>
                            <li>
                                Using Flutter technology to develop mobile
                                application.
                            </li>
                            <li>
                                Working on Angular legacy project as standalone
                                developer.
                            </li>
                            <li>
                                Improving performance, refactoring code, adding
                                features.
                            </li>
                            <li>
                                Doing simple tasks on the backend (.NET
                                technology) and MongoDB.
                            </li>
                            <li>Using SendGrid API to manage mail delivery.</li>
                        </ul>
                    </TimelineTile>
                </motion.div>
                <motion.div variants={tile}>
                    <TimelineTile
                        isFirst={false}
                        isLast={false}
                        years={'2019 - 2020'}
                    >
                        <div className="flex items-center space-x-5">
                            <BriefcaseIcon className="h-10 w-10" />
                            <div>
                                <h3 className="text-xl font-bold uppercase">
                                    Software Manual Tester
                                </h3>
                                <p className="text-sm text-teal-600">
                                    DGS Poland sp. z o.o. | Mierzyn
                                </p>
                            </div>
                        </div>

                        <ul className="mt-5 list-inside list-disc space-y-1 text-sm">
                            <li>
                                Verifying quality of software and reporting
                                issues
                            </li>
                            <li>Preparing test documentation</li>
                            <li>
                                Assisting engineers in performing a project
                                related duties
                            </li>
                        </ul>
                    </TimelineTile>
                </motion.div>
                <motion.div variants={tile}>
                    <TimelineTile
                        isFirst={false}
                        isLast={false}
                        years={'2013 - 2019'}
                    >
                        <div className="flex items-center space-x-5">
                            <BriefcaseIcon className="h-10 w-10" />
                            <div>
                                <h3 className="text-xl font-bold uppercase">
                                    Test Engineer
                                </h3>
                                <p className="text-sm text-teal-600">
                                    DGS Poland sp. z o.o. | Mierzyn
                                </p>
                            </div>
                        </div>

                        <ul className="mt-5 list-inside list-disc space-y-1 text-sm">
                            <li>
                                Maintaining and improving testing stations for
                                medical devices
                            </li>
                            <li>Analyzing electrical circuits of PCA Boards</li>
                            <li>Repairing PCA Boards</li>
                            <li>
                                Verifying different production processes and
                                implement changes
                            </li>
                        </ul>
                    </TimelineTile>
                </motion.div>
                <motion.div variants={tile}>
                    <TimelineTile
                        isFirst={false}
                        isLast={true}
                        years={'2009 - 2013'}
                    >
                        <div className="flex items-center space-x-5">
                            <AcademicCapIcon className="h-10 w-10" />
                            <div>
                                <h3 className="text-xl font-bold uppercase">
                                    Bachelor of Engineering
                                </h3>
                                <p className="text-sm text-teal-600">
                                    West Pomeranian University of Technology |
                                    Szczecin
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 text-sm">
                            Automatic Control and Robotics
                        </p>
                    </TimelineTile>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default MyExperience
