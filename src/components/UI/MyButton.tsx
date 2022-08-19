import React from "react";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  addClassName?: string;
}

const MyButton = ({ children, addClassName, ...props }: MyButtonProps) => {
  return (
    <button className={`p-2 rounded-xl text-lg ${addClassName}`} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
