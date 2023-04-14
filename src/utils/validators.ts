import { RegisterOptions } from 'react-hook-form'

export const validateRequired = (
    condition?: boolean,
    message = 'Required field'
): RegisterOptions => {
    return {
        required: {
            value: condition ?? true,
            message: message
        }
    }
}
