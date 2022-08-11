import React, {
  DetailedHTMLProps, FC, InputHTMLAttributes, memo,
} from "react";
import cx from "classnames";

type BaseInputProps = {
  register: any
  error: any
  iconLeft?: React.ReactElement
  iconRight?: React.ReactElement
}

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & BaseInputProps

const Input: FC<Props> = (props) => {
  const {
    className, register, onBlur, iconLeft, iconRight, ...otherProps
  } = props;

  const containerClassName = cx(
    className,
    "rounded-full w-full flex",
    "items-center bg-border-color py-16 px-24 cursor-text",
  );
  const inputClassName = cx(
    "w-full bg-transparent placeholder:text-light-gray",
    "text-body-small outline-none autofill:shadow-inherit",
    { "ml-10": iconLeft },
  );
  return (
    <label className={containerClassName}>
      {iconLeft || null}
      <input
        className={inputClassName}
        {...otherProps}
        {...register}
        onBlur={onBlur}
      />
      {iconRight || null}
    </label>
  );
};

export default memo(Input);
