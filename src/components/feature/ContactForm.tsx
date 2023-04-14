import { FC } from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '../ui/FormInput'
import FormTextarea from '../ui/FormTextarea'
import { validateRequired } from '../../utils/validators'
import Button from '../ui/Button'

type Props = {
    callback: (payload: ContactFormDto) => Promise<void>
}
const ContactForm: FC<Props> = (props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormDto>()

    const _submit = (payload: ContactFormDto) => {
        props.callback(payload).then(() => reset())
    }

    return (
        <form
            noValidate
            onSubmit={handleSubmit(_submit)}
            className="mt-20 w-full max-w-screen-md rounded-lg border border-black bg-zinc-800 p-10"
        >
            <fieldset className="grid grid-cols-2 gap-5">
                <div>
                    <FormInput
                        {...register('name', {
                            ...validateRequired()
                        })}
                        label={'Name'}
                        required
                        errorMessage={errors.name?.message}
                    />
                </div>
                <div>
                    <FormInput
                        {...register('email', { ...validateRequired() })}
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
                        required
                        errorMessage={errors.subject?.message}
                    />
                </div>
                <div>
                    <FormTextarea
                        {...register('message', { ...validateRequired() })}
                        label={'Message'}
                        required
                        rows={6}
                        errorMessage={errors.message?.message}
                    />
                </div>
            </fieldset>
            <div className="mx-auto mt-5 max-w-xs">
                <Button
                    type={'submit'}
                    isSubmitting={isSubmitting}
                    className="h-10 w-full rounded bg-teal-700 px-5 text-sm font-bold uppercase text-zinc-100 hover:bg-teal-600"
                >
                    Send message
                </Button>
            </div>
        </form>
    )
}

export default ContactForm

export type ContactFormDto = {
    name: string
    email: string
    subject: string
    message: string
}
