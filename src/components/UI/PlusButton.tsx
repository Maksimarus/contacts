import React from "react";
import { BsPlus } from "react-icons/bs";

interface PlusButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PlusButton = (props: PlusButtonProps) => {
  return (
    <button
      {...props}
      className="bg-pink-400 w-12 h-12 rounded-xl mr-4 flex justify-between align-middle"
    >
      <BsPlus size={48} />
    </button>
  );
};

export default PlusButton;
