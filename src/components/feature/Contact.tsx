import { FC } from 'react'
import ContactForm, { ContactFormDto } from './ContactForm'

const Contact: FC = () => {
    const handleContactMe = async (payload: ContactFormDto) => {
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
            return Promise.reject('Something went wrong')
        } else {
            return Promise.resolve()
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
            <div className="mx-auto -mt-32 flex max-w-screen-2xl flex-col items-center justify-center pt-32">
                <img src="/images/envelope.png" className="h-16 w-16" alt="" />
                <h2 className="mt-10 text-center text-4xl font-bold uppercase tracking-widest">
                    Contact
                </h2>
                <ContactForm callback={handleContactMe} />
            </div>
        </section>
    )
}

export default Contact
