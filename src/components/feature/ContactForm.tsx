import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '../ui/FormInput'
import FormTextarea from '../ui/FormTextarea'
import { validateEmail, validateRequired } from '../../utils/validators'
import Button from '../ui/Button'

type Props = {
    callback: (payload: ContactFormDto) => Promise<void>
}
const ContactForm: FC<Props> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormDto>()

    const _submit = (payload: ContactFormDto) => {
        setIsLoading(true)
        props.callback(payload).then(() => {
            reset()
            setIsLoading(false)
        })
    }

    return (
        <form
            noValidate
            onSubmit={handleSubmit(_submit)}
            className="w-full self-stretch rounded-lg border border-black bg-zinc-800 p-6 md:p-10 lg:max-w-screen-md"
        >
            <fieldset className="grid gap-5 sm:grid-cols-2">
                <div>
                    <FormInput
                        {...register('name', {
                            ...validateRequired()
                        })}
                        label={'Name'}
                        maxLength={50}
                        required
                        errorMessage={errors.name?.message}
                    />
                </div>
                <div>
                    <FormInput
                        {...register('email', {
                            ...validateRequired(),
                            ...validateEmail()
                        })}
                        label={'Email'}
                        required
                        errorMessage={errors.email?.message}
                    />
                </div>
            </fieldset>
            <fieldset className="mt-5 space-y-5">
                <div>
                    <FormInput
                        {...register('subject', {
                            ...validateRequired()
                        })}
                        label={'Subject'}
                        maxLength={100}
                        required
                        errorMessage={errors.subject?.message}
                    />
                </div>
                <div>
                    <FormTextarea
                        {...register('message', { ...validateRequired() })}
                        label={'Message'}
                        maxLength={500}
                        required
                        rows={6}
                        errorMessage={errors.message?.message}
                    />
                </div>
            </fieldset>
            <div className="mx-auto mt-5 max-w-xs">
                <Button
                    type={'submit'}
                    isSubmitting={isLoading}
                    className="h-10 w-full rounded bg-teal-700 px-5 text-sm font-bold uppercase text-zinc-100 hover:bg-teal-600"
                >
                    Send message
                </Button>
            </div>
        </form>
    )
}

export default ContactForm

export interface ContactFormDto {
    name: string
    email: string
    subject: string
    message: string
}
