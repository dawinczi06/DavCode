import { FC } from 'react'
import TimelineTile from './TimelineTile'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const MyExperience: FC = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold uppercase tracking-widest">
                Experience & Education
            </h2>
            <div className="mt-20">
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

                    <ul className="mt-5 list-inside list-disc text-sm">
                        <li>
                            Implementing new features, components and logic
                            based on Adobe XD designs. Maintaining the code,
                            reacting on issues, implementing
                            changes/suggestions.
                        </li>
                        <li>
                            Using React + Next.JS with Tailwind CSS framework
                            and TypeScript for most projects.
                        </li>
                        <li>
                            Preparing infrastructure for API requests with
                            OpenAPI and SWR
                        </li>
                        <li>
                            Using Flutter technology to develop mobile
                            application
                        </li>
                        <li>
                            Working on Angular legacy project as standalone
                            developer. Improving performance, refactoring code,
                            adding features. Doing simple tasks on the backend
                            (.NET technology) and MongoDB.
                        </li>
                        <li>
                            Preparing email templates in SendGrid environment
                        </li>
                    </ul>
                </TimelineTile>
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

                    <ul className="mt-5 list-inside list-disc text-sm">
                        <li>
                            Verifying quality of software and reporting issues
                        </li>
                        <li>Preparing test documentation</li>
                        <li>
                            Assisting engineers in performing a project related
                            duties
                        </li>
                    </ul>
                </TimelineTile>
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

                    <ul className="mt-5 list-inside list-disc text-sm">
                        <li>
                            Maintaining and improving testing stations for
                            medical devices
                        </li>
                        <li>Analyzing electrical circuits of PCA Boards</li>
                        <li>Repairing PCA Boards</li>
                        <li>
                            Verifying different production processes and
                            implement change
                        </li>
                    </ul>
                </TimelineTile>
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
            </div>
        </div>
    )
}

export default MyExperience
