import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cx from "classnames";

export const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = (props) => {
    const { className, ...otherProps } = props

    return (
        <div className={cx(className)}>
            <button {...otherProps} />
        </div>
    )
}