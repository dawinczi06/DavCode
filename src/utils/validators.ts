import { RegisterOptions } from 'react-hook-form'

export const emailRegex = /^[^@\s]+@[^@\s]+\.[^@.\s]+$/
export const validateRequired = (
    message: string = 'Required',
    condition?: boolean
): RegisterOptions => {
    return {
        required: {
            value: condition ?? true,
            message: message
        }
    }
}

export const validateEmail = (): RegisterOptions | any => {
    return {
        pattern: {
            value: emailRegex,
            message: `Email address must be in the correct format, ex.: name@example.com`
        }
    }
}
