import Image from 'next/image'
import BillList from './components/BillList/BillList'
import CreateBill from './components/CreateBill/CreateBill'
import Button from './components/Button/Button'
import prisma from './config/prisma'
// [
//   {
//     name: "ahmad",
//     email: "@gmail.com",
//     phone: 424534534,
//     location: "Faislabad",
//     hobby: "PhotoGraphy",
//   },
// ];
const fetchData=async ()=>{
  try {
    const data =await prisma.data.findMany();
    return data
  } catch (error) {
    console.log("error", error);
  }
}
const Home=async ()=> {
  const data=await fetchData()
  return (
    <>
      <h1 className="w-full text-center py-4 bg-red-500 text-white text-4xl font-extrabold">
        
        Crud Application
      </h1>
      <div className="mx-8">
        <BillList data={data} />
        <Button title={"Create Bill"} />
      </div>
    </>
  );
}
export default Home;