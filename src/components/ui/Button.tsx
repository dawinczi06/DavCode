import cx from 'classnames'

import { ButtonHTMLAttributes, FC } from 'react'
import Spinner from './Spinner'

type Props = {
    isSubmitting?: boolean
}
const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
    isSubmitting,
    ...props
}) => {
    return (
        <button
            {...props}
            className={cx(
                'relative flex h-10 w-full w-full items-center justify-center whitespace-nowrap rounded bg-teal-700 px-5 text-sm font-bold uppercase text-zinc-100 transition hover:bg-teal-600',
                props.className
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
