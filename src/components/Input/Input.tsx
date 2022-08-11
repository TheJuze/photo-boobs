import React, {
  DetailedHTMLProps, FC, InputHTMLAttributes, memo,
} from "react";
import cx from "classnames";

type BaseInputProps = {
  register: any
  error: any
  iconLeft?: React.ReactElement
}

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & BaseInputProps

const Input: FC<Props> = (props) => {
  const {
    className, register, error, iconLeft, ...otherProps
  } = props;

  return (
    <label className={cx(className, "relative rounded-[20rem] w-full flex items-center bg-gray  py-16 px-24 cursor-text")}>
      {iconLeft || null}
      <input
        className={cx(
          "w-full bg-transparent placeholder:text-light-gray text-caption outline-none text-white",
          { "ml-8": iconLeft },
        )}
        {...otherProps}
        {...register}
      />
      <p className="absolute inset-0">{error}</p>
    </label>
  );
};

export default memo(Input);
