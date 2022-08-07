import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import cx from "classnames";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
     { register: any, error: any }

const Input: FC<Props> = (props) => {
  const {
    className, register, error, ...otherProps
  } = props;

  return (
    <div className={cx(className, "rounded-20")}>
      <input {...otherProps} {...register} />
    </div>
  );
};

export default Input;
