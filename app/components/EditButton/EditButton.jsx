"use client";
import React, { useState } from "react";
import EditBill from "../Editbill/Editbill";
import { FaRegEdit } from "react-icons/fa";

const EditButton = ({ title, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <EditBill id={id} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
      <button
        onClick={setIsOpen}
        className="py-2 px-4 bg-green-600 rounded-md my-2 font-bold text-white"
      >
        <FaRegEdit />
      </button>
    </div>
  );
};

export default EditButton;
