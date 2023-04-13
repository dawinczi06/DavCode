import { FC } from 'react'

const HeroAnimation: FC = () => {
    return (
        <div className="h-full w-full">
            <object type="image/svg+xml" data="/hero-animated.svg">
                svg-animation
            </object>
        </div>
    )
}

export default HeroAnimation
