import { NextResponse } from "next/server";
import prisma from "@/app/config/prisma";
export const POST = async (req) => {
  try {
    const body = await req.json();
    console.log("body", body);
    const data = await prisma.data.create({
      data: {
        name: body?.name,
        email: body?.email,
        phone: body?.phone,
        location: body?.location,
        hobby: body?.hobby,
      },
    });
    console.log(data);
    return NextResponse.json({ messsage: "Data created" });
  } catch (error) {
    console.log("error",error);
          return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error),
          });

  }
};
