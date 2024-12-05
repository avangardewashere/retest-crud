import connectMongoDB from "@/libs/mongodb";
import Cat from "@/models/Cat"
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id} = params;
    const {newCatName:name,newCatBreed:breed, newCatColor:color} 
    = await request.json();
    console.log(name,breed,color)
    await connectMongoDB();
    await Cat.findByIdAndUpdate(id,{name,breed,color});
    return NextResponse.json({message:"Cat Information Updated"});
}

export async function GET (request,{params}){
    const {id}=params
    await connectMongoDB();
    const cat = await Cat.findOne({_id:id})
    return NextResponse.json({cat},{status:200})
}
