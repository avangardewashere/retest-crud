"use client"

import {useState} from "react";

interface ETFProps {
  id: string;
  name:string;
  breed:string;
  color:string;
}

export default function EditTopicForm(props: ETFProps) {
  const { id } = props;
    const [newName,setNewName] = useState()

  console.log("inside form:", id);
  return (
    <form
      action="
      "
      className="flex flex-col gap-3"
    >
      <input
        type="text"
        placeholder="Update Cat Name"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        placeholder="Update Cat Breed"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        placeholder="Update Cat Color"
        className="border border-slate-500 px-8 py-2"
      />

      <button className="bg-green-300 w-fit p-3 rounded-md">
        Update Information
      </button>
    </form>
  );
}
