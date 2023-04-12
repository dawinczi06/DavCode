import { FC } from 'react'

type Props = {
    imageUrl: string
    label: string
}
const Tile: FC<Props> = (props) => {
    return (
        <div
            title={props.label}
            className="flex h-full flex-col items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 p-10 shadow-lg shadow-gray-800 transition hover:scale-110 hover:border-teal-800 hover:bg-teal-900 hover:bg-opacity-30"
        >
            <img src={props.imageUrl} alt="" className="h-20 w-20" />
            <p className="mt-7 font-bold">{props.label}</p>
        </div>
    )
}

export default Tile
