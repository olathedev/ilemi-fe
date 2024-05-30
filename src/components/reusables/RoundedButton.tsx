import React from 'react'

type Props = {
    children: React.ReactNode;
    variant: "primary" | "white";

}

const RoundedButton = ({ children, variant }: Props) => {
    return (
        <button className={`px-8 py-3 rounded-3xl cursor-pointer text-sm ${variant === 'primary'
                ? 'bg-primary-100 text-white ' : 'bg-white text-primary-100'

            }`}>

            {children}

        </button>

    )
}

export default RoundedButton