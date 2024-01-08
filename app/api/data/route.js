import { NextResponse } from "next/server";
import prisma from "@/app/config/prisma";
import { data } from "autoprefixer";
import { Prisma } from "@prisma/client";
export const POST = async (req) => {
  try {
    const body = await req.json();
    const data = await prisma.data.create({
      data: {
        name: body?.name,
        email: body?.email,
        phone: body?.phone,
        location: body?.location,
        hobby: body?.hobby,
      },
    });

    return NextResponse.json({ messsage: "Data created" });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: JSON.stringify(error),
    });
  }
};
export const PUT=async (req)=>{
    const url= new  URL(req.url).searchParams.get("id")
    // const search = url;
        const body = await req.json();

    try {
      const updateUser = await prisma.data.update({
        where: { id: url },
        data: {
          name: body.name,
          email: body.email,
          phone: body.phone,
          location: body.location,
          hobby: body.hobby,
        },
      }); 
     return NextResponse.json({message:"Data Edited"}) 
     console.log(updateUser);
     console.log(url);
    } catch (error) {
        console.log("error",error);
       return NextResponse.json({message:"Something Went Wronge",error:error.message})
    }
}

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const deleteUser = await prisma.data.delete({
      where: { id: body.id },
    });
    return NextResponse.json({
      message: "deleted",
    });
  } catch (error) {
    return NextResponse.json({
      message: "SomeThing Went Wronge...",
      error: JSON.stringify(error),
    });
  }
};

