import cx from 'classnames'

import { ButtonHTMLAttributes, FC } from 'react'
import Spinner from './Spinner'

type Props = {
    isSubmitting?: boolean
    variant?: 'primary' | 'blank'
}
const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
    isSubmitting,
    ...props
}) => {
    const variants: Record<string, string> = {
        blank: '',
        primary: 'bg-teal-700 text-zinc-100 hover:bg-teal-600 px-5'
    }

    return (
        <button
            {...props}
            className={cx(
                'relative flex h-10 w-full items-center justify-center whitespace-nowrap rounded text-sm font-bold uppercase transition ',
                props.className,
                variants[props.variant ?? 'primary']
            )}
            type={props.type}
            disabled={props.disabled || isSubmitting}
        >
            <>
                <Spinner
                    className={cx(
                        'absolute h-3 fill-current',
                        isSubmitting ? 'visible' : 'invisible'
                    )}
                />
                <span
                    className={cx(
                        'flex h-full w-full items-center justify-center',
                        { invisible: isSubmitting }
                    )}
                >
                    <span>{props.children}</span>
                </span>
            </>
        </button>
    )
}

export default Button
