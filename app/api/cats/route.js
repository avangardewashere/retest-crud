 import connectMongoDB from "@/libs/mongodb.ts"
import Cat from "@/models/Cat.ts";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, breed, color } = await request.json();

  await connectMongoDB();
  await Cat.create({ name, breed, color });
  return NextResponse.json(
    { message: "A Cat Has been Created" },
    { status: 201 }
  );
}

export async function GET() {
    await connectMongoDB();
    const cats = await Cat.find();
    console.log(cats)
    return NextResponse.json({cats})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    console.log(request);
    await connectMongoDB();
    await Cat.findByIdAndDelete(id);
    return NextResponse.json({message:"Cat Deleted"},{state:200})
}
