import cx from 'classnames'
import React, {
    ChangeEvent,
    forwardRef,
    ForwardRefRenderFunction,
    TextareaHTMLAttributes,
    useState
} from 'react'

import Label from './Label'

type TextareaProps = {
    label?: string
    errorMessage?: string
    maxLength?: number
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: ForwardRefRenderFunction<
    HTMLTextAreaElement,
    TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ label, errorMessage, maxLength, onChange, ...props }, ref) => {
    const [textLength, setTextLength] = useState<number>(0)

    return (
        <>
            <label>
                {label && (
                    <div className="flex items-center justify-between">
                        <Label required={props.required}>{label}</Label>
                        {maxLength ? (
                            <span className="mb-2 text-xs">
                                {textLength} / {maxLength}
                            </span>
                        ) : null}
                    </div>
                )}
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
                        onChange={(e) => {
                            setTextLength(e.target.value.length ?? 0)
                            onChange?.(e)
                        }}
                        maxLength={maxLength}
                    />
                </span>
            </label>
            <div className="my-2 text-xs text-red-500">{errorMessage}</div>
        </>
    )
}

export default forwardRef(Textarea)
