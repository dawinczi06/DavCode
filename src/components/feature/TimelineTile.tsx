import { FC } from 'react'
import cx from 'classnames'

type Props = {
    isFirst: boolean
    isLast: boolean

    years: string
}

const TimelineTile: FC<Props> = (props) => {
    return (
        <div className="flex h-full max-w-screen-md">
            <div
                className={cx('w-1 bg-teal-700', {
                    'rounded-t-full': props.isFirst,
                    'rounded-b-full': props.isLast
                })}
            />
            <div className="relative w-10">
                <div className="mt-16 h-1 w-full bg-teal-700" />
                <div className="absolute top-[54px] -left-3.5 h-6 w-6 rounded-full border-4 border-zinc-900 bg-teal-700" />
            </div>
            <div className="flex w-full flex-col">
                <div className="flex h-8 max-w-max items-center rounded-t-lg border-b border-b-black bg-zinc-800 px-8 text-sm font-bold text-teal-600">
                    {props.years}
                </div>
                <div
                    className={cx(
                        'w-full rounded-b-lg rounded-tr-lg bg-zinc-800 p-8 text-zinc-300',
                        { 'mb-5': !props.isLast }
                    )}
                >
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default TimelineTile