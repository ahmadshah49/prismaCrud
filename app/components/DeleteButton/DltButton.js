"use client"
import { RiDeleteBin6Line } from "react-icons/ri";

const DltButton = ({id}) => {
const onDelteHandler=async ()=>{
    try {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  id: id,
});

var requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

const data=await fetch(
  "https://prisma-crud-s9js-j0o4aesh2-ahmadshah49s-projects.vercel.app/api/data",
  requestOptions
);
alert("Deleted")
    } catch (error) {
        console.log("error",error);
    }
}
  return (
    <button
    
onClick={onDelteHandler}      
      className="py-2 px-4 bg-red-600 rounded-md my-2 font-bold text-white"
    >
<RiDeleteBin6Line/>
    </button>
  );
}

export default DltButton