import React, { ButtonHTMLAttributes, DetailedHTMLProps, memo } from "react";
import cx from "classnames";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const CaptureButton: React.FC<Props> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <button
      type="button"
      className={cx(
        className,
        "rounded-full drop-shadow-blue bg-brand-gradient w-80 h-80 relative flex justify-center items-center",
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default memo(CaptureButton);
