import React from "react";
import Button from "../Button/Button";
import EditButton from "../EditButton/EditButton";
import DltButton from "../DeleteButton/DltButton";

const BillList = ({ data }) => {
  return (
    <div className=" my-8 bg-gray-200 rounded-xl py-8 px-7">
      <table className=" w-full text-center  py-10 ">
        <thead className="border-b h-16   border-black/20">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Hobby</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="h-10 border-b    border-black/20">
          {data?.map((data, i) => (
            <tr key={i} className="border-b border-black/20">
              <td>{data.id.slice(15, 35)}...</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.location}</td>
              <td>{data.hobby}</td>
              <td>
                <EditButton id={data.id} title={""} />
              </td>
              <td>
                <DltButton title={"Delete"} id={data.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillList;
