import { createContext, FC, ReactNode, useContext } from 'react'
import useToastCtx, { ToastContext } from '../hooks/useToastCtx'

type AppContext = ToastContext

const AppContext = createContext<AppContext>({} as AppContext)

type Props = {
    children: ReactNode
}

const AppContextProvider: FC<Props> = (props) => {
    const toastContext = useToastCtx()

    return (
        <AppContext.Provider
            value={{
                ...toastContext
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext<AppContext>(AppContext)
export default AppContextProvider
