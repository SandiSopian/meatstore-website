"use client";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <div className="flex justify-center">
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
        {children}
      </button>
    </div>
  );
};

export default Button;
