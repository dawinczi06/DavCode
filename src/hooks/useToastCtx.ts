import { useCallback, useState } from 'react'
import { Toast } from '../interfaces/toast'

export type ToastContext = {
    toast?: Toast
    errorReceived: (message: string) => void
    successReceived: (message: string) => void
    toastCleared: () => void
}

const useToastCtx = (): ToastContext => {
    const [toast, setToast] = useState<Toast>()

    const errorReceived = useCallback(
        (message: string) =>
            setToast({
                message,
                type: 'error'
            }),
        []
    )

    const successReceived = useCallback(
        (message: string) =>
            setToast({
                message,
                type: 'success'
            }),
        []
    )

    const toastCleared = useCallback(() => setToast(undefined), [])

    return {
        toast,
        errorReceived,
        successReceived,
        toastCleared
    }
}

export default useToastCtx
