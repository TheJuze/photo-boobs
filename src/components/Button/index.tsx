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
  const { className, children, ...otherProps } = props;

  const isLink = !!otherProps.href;

  if (isLink) {
    return (
      <a
        href={otherProps.href}
        target={otherProps.target}
        className={cx(className, "text-button text-white text-center w-full py-16 bg-accent rounded-32")}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cx(className, "text-button text-white text-center w-full py-16 bg-accent rounded-32")}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
