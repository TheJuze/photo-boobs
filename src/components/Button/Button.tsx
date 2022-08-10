import React, {
  ButtonHTMLAttributes, DetailedHTMLProps, FC,
} from "react";
import cx from "classnames";

type NewButtonProps = {
  href?: string
  target?: string
}

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & NewButtonProps

const Button: FC<Props> = (props) => {
  const {
    className, children, disabled, ...otherProps
  } = props;

  const isLink = !!otherProps.href;

  const buttonClassName = cx(
    className,
    "flex justify-center items-center",
    "text-button text-white w-full py-16",
    "bg-accent rounded-32 font-bold",
    { "bg-gray text-light-gray cursor-not-allowed": disabled },
  );

  if (isLink) {
    return (
      <a
        href={otherProps.href}
        target={otherProps.target}
        className={buttonClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={buttonClassName}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
