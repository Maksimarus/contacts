import React, { InputHTMLAttributes } from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  addClassName?: string;
  ref?: React.Ref<any>;
}

const MyInput = React.forwardRef(
  ({ addClassName, ...props }: MyInputProps, ref) => {
    return (
      <input
        className={`w-full p-3 bg-gray-800 rounded-xl ${addClassName}`}
        ref={ref}
        {...props}
      />
    );
  }
);

export default MyInput;
