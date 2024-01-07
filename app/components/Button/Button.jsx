"use client";
import React, { useState } from "react";
import CreateBill from "../CreateBill/CreateBill";

const Button = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <CreateBill isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
      <button
        onClick={setIsOpen}
        className="py-2 px-4 bg-red-600 rounded-md my-2 font-bold text-white"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
