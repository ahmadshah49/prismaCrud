"use client";
import { useState } from "react";

const CreateBill = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [hobby, setHobby] = useState("");
  const submitHandler = () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: name,
        email: email,
        phone: parseInt(phone),
        location: location,
        hobby: hobby,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/api/data", requestOptions);
      alert("data Created");
    } catch (error) {
      console.log("error", error);
    }
    if (!name || !email || !phone || !location || !hobby) {
      alert("please fill all values");
      return;
    }
    {
      console.log(name, email, phone, location, hobby);
    }

    setName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setHobby("");
  };
  return (
    <div
      className={`${
        isOpen
          ? "w-screen h-screen ease-linear duration-500 opacity-100 transition bg-black/20 absolute inset-0  flex justify-center items-center"
          : "ease-in-out duration-500 transition opacity-0 hidden"
      }`}
    >
      <div className="bg-gray-500 w-[50%]  flex flex-col  justify-center py-8 px-8 rounded-xl">
        <h1 className=" text-center  text-2xl font-semibold text-white ">
          Create Crud
        </h1>
        <label className="mx-10 block text-white my-2">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-3 mx-10 border rounded-md border-black outline-none px-2"
        />
        <br />
        <label className="mx-10 block text-white my-2">Email</label>
        <input
          type="email"
          name="id"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-3 mx-10 border rounded-md border-black outline-none px-2"
        />
        <br />
        <label className="mx-10 block text-white my-2">Phone:</label>
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="py-3 mx-10 border rounded-md border-black outline-none px-2"
        />
        <br />
        <label className="mx-10 block text-white my-2">Location:</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="py-3 mx-10 border rounded-md border-black outline-none px-2"
        />
        <br />
        <label className="mx-10 block text-white my-2">Hobby:</label>
        <input
          type="text"
          name="hobby"
          placeholder="Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          className="py-3 mx-10 border rounded-md border-black outline-none px-2"
        />
        <br />
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              submitHandler();
              onClose();
            }}
            className="bg-gray-200 py-2 px-4 rounded-md font-semibold text-green-600"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 py-2 px-4 rounded-md font-semibold text-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBill;
