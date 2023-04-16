import { FC } from 'react'
import ContactForm from './ContactForm'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useAppContext } from '../../providers/AppContextProvider'
import { ContactFormDto } from '../../interfaces/contactForm'

const Contact: FC = () => {
    const { successReceived, errorReceived } = useAppContext()
    const handleContactMe = async (payload: ContactFormDto): Promise<void> => {
        const res = await fetch('/api/sendgrid', {
            body: JSON.stringify({
                email: payload.email,
                fullname: payload.name,
                subject: payload.subject,
                message: payload.message
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const { error } = await res.json()
        if (error) {
            errorReceived('Something went wrong. Please try again!')
            return Promise.reject()
        } else {
            successReceived('Message was sent successfully!')
            return Promise.resolve()
        }
    }

    const variant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    const formVariant = {
        hidden: { opacity: 0, x: -100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section
            id={'contact'}
            className="w-full border-b border-b-zinc-800 px-5 py-40 md:px-10"
            style={{
                backgroundImage: 'url("/images/hero-3.jpg")',
                backgroundSize: 'cover'
            }}
        >
            <div className="mx-auto -mt-32 max-w-screen-2xl pt-32">
                <motion.div
                    variants={variant}
                    initial="hidden"
                    whileInView="show"
                    className="flex flex-col items-center"
                >
                    <img
                        src="/images/envelope.png"
                        className="h-16 w-16"
                        alt="envelope-icon"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold uppercase tracking-widest md:text-4xl">
                        Contact
                    </h2>
                </motion.div>

                <motion.div
                    variants={formVariant}
                    initial="hidden"
                    whileInView="show"
                    className="mx-auto mt-20 flex h-full w-full max-w-screen-xl flex-col items-center justify-center lg:flex-row lg:items-start lg:space-x-5"
                >
                    <div className="order-last mt-5 flex w-full flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0 lg:order-first lg:mt-0 lg:w-fit lg:max-w-screen-md lg:flex-col lg:space-x-0 lg:space-y-5 ">
                        <div className="flex w-full flex-col items-center justify-center space-y-5 rounded-lg border border-black bg-zinc-800 p-6 sm:w-full md:h-40 lg:w-full">
                            <PhoneIcon className="h-10 w-10 text-teal-700" />
                            <p className="text-sm font-bold text-zinc-300 md:text-base">
                                +48 609 398 947
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center space-y-5 rounded-lg border border-black bg-zinc-800 p-6 sm:w-full md:h-40 lg:w-full">
                            <EnvelopeIcon className="h-10 w-10 text-teal-700" />
                            <p className="text-sm font-bold text-zinc-300 md:text-base">
                                karbowniczek.daw@gmail.com
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center space-y-5 rounded-lg border border-black bg-zinc-800 p-6 sm:w-full md:h-40 lg:w-full">
                            <img
                                src="/images/linkedin-logo.png"
                                className="h-10 w-10"
                                alt="linkedin-logo"
                            />
                            <p className="text-sm font-bold text-zinc-300 md:text-base">
                                <a
                                    href="https://www.linkedin.com/in/d-karbowniczek/"
                                    className="underline hover:text-teal-700"
                                >
                                    d-karbowniczek
                                </a>
                            </p>
                        </div>
                    </div>

                    <ContactForm callback={handleContactMe} />
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
