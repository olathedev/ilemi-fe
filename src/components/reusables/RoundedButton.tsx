import React from 'react'

type Props = {
    children: React.ReactNode;
    variant: "primary" | "white";

}

const RoundedButton = ({ children, variant }: Props) => {
    return (
        <span className={`w-full px-8 py-3 rounded-3xl cursor-pointer text-sm ${variant === 'primary'
                ? 'bg-primary text-white ' : 'bg-white text-primary-100'
            }`}>

            {children}

        </span>

    )
}

export default RoundedButton