import cx from 'classnames'
import React, {
    forwardRef,
    ForwardRefRenderFunction,
    TextareaHTMLAttributes
} from 'react'

import Label from './Label'

type TextareaProps = {
    label?: string
    errorMessage?: string
}

const Textarea: ForwardRefRenderFunction<
    HTMLTextAreaElement,
    TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ label, errorMessage, ...props }, ref) => {
    return (
        <>
            <label>
                {label && <Label required={props.required}>{label}</Label>}
                <span className={cx('flex items-center')}>
                    <textarea
                        {...props}
                        ref={ref}
                        className={cx(
                            'w-full appearance-none rounded-md border bg-black px-3 pt-3 text-sm focus:outline-none focus:ring-2',
                            errorMessage
                                ? 'border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-zinc-700 focus:ring-teal-800'
                        )}
                    />
                </span>
            </label>
            <div className="my-2 text-xs text-red-500">{errorMessage}</div>
        </>
    )
}

export default forwardRef(Textarea)
