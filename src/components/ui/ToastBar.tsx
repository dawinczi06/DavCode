import { XMarkIcon } from '@heroicons/react/24/solid'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { Toast } from '../../interfaces/toast'
import { useAppContext } from '../../providers/AppContextProvider'

const ToastBar: FC<Toast> = ({ type, message }) => {
    const { toastCleared } = useAppContext()
    const [timer, setTimer] = useState<number | undefined>(5000)

    const handleOnClose = () => {
        toastCleared()
    }

    useEffect(() => {
        let toastInterval: ReturnType<typeof setTimeout> | undefined

        if (timer) {
            toastInterval = setTimeout(() => {
                toastCleared()
            }, timer)
        } else {
            toastInterval && clearTimeout(toastInterval)
        }

        return () => {
            toastInterval && clearTimeout(toastInterval)
        }
    }, [toastCleared, timer])

    const toastVariant = () => {
        switch (type) {
            case 'error':
                return 'bg-red-500 text-white'
            case 'success':
                return 'bg-teal-600 text-zinc-200'
        }
    }

    return (
        <div className="fixed inset-x-0 top-20 z-[3000] mx-auto flex h-16 w-full max-w-xl justify-center overflow-hidden p-3">
            <motion.div
                initial={{ y: -44 }}
                animate={{ y: 0 }}
                onMouseLeave={() => setTimer(1000)}
                onMouseEnter={() => setTimer(undefined)}
                className={cx(
                    'flex h-12 w-full items-center justify-between rounded px-3',
                    toastVariant()
                )}
            >
                <div className="flex items-center space-x-3 divide-x divide-white divide-opacity-30 pr-3">
                    <div className="font-bold capitalize">{type}</div>
                    <div className="pl-3">{message}</div>
                </div>
                <button
                    onClick={handleOnClose}
                    className={cx(
                        'flex h-6 w-6 cursor-pointer items-center justify-center rounded-full',
                        type === 'success' ? 'bg-teal-700' : 'bg-red-700 '
                    )}
                >
                    <XMarkIcon className="h-3.5 w-3.5 text-white" />
                </button>
            </motion.div>
        </div>
    )
}

export default ToastBar
