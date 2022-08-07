import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cx from "classnames";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: FC<Props> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={cx(className)}>
      <button type="button" {...otherProps} />
    </div>
  );
};

export default Button;
