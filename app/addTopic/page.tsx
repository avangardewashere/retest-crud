"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !breed || !color) {
      alert("Please fill in the fields.");
      return;
    }

    try {
      const res =await fetch("http://localhost:3002/api/cats", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, breed, color }),
      });

      if(!res.ok){
        throw new Error("Failed to create a new Cat")
      }
      router.push("/")
      return res.json();


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex text-slate-600 flex-col gap-3">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Cat Name"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        onChange={(e) => setBreed(e.target.value)}
        placeholder="Enter Cat Breed"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setColor(e.target.value)}
        type="text"
        placeholder="Enter Cat Color"
        className="border border-slate-500 px-8 py-2"
      />

      <button type={"submit"} className="bg-green-300 w-fit p-3 rounded-md">
        Submit
      </button>
    </form>
  );
}
