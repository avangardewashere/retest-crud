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
