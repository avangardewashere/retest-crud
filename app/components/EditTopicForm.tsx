"use client";

import { useRouter } from "next/router";
import { useState } from "react";

interface ETFProps {
  id: string;
  name: string;
  breed: string;
  color: string;
}

export default function EditTopicForm(props: ETFProps) {
  const { id, name, breed, color } = props;
  const [newName, setNewName] = useState(name);
  const [newBreed, setNewBreed] = useState(breed);
  const [newColor, setNewColor] = useState(color);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3002/api/topics/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ newName, newBreed, newColor }),
    });

    if (!res.ok) {
      throw new Error("Failed to update the cat's Information.");
    }

    router.push("/");

    try {
    } catch (error) {
      console.log(error);
    }
  };

  console.log("inside form:", id);
  return (
    <form
      action="
      "
      onClick={handleSubmit}
      className="flex flex-col gap-3"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Update Cat Name"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        value={breed}
        onChange={(e) => setNewBreed(e.target.value)}
        placeholder="Update Cat Breed"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        onChange={(e) => setNewColor(e.target.value)}
        value={color}
        placeholder="Update Cat Color"
        className="border border-slate-500 px-8 py-2"
      />

      <button className="bg-green-300 w-fit p-3 rounded-md">
        Update Information
      </button>
    </form>
  );
}
