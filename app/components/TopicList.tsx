import Link from "next/link";
import RemoveBtn from "./removeBtn";
import { HiPencilAlt } from "react-icons/hi";

interface CatInfo {
  _id: string;
  name: string;
  breed: string;
  color: string;
}

const getCats = async (): Promise<{ cats: CatInfo[] } | { cats: [] }> => {
  try {
    console.log("Fetching...")
    const res = await fetch("http://localhost:3002/api/cats", {
      cache: "no-store",
    });
    console.log("Response status:", res.status);
    if (!res.ok) {
      throw new Error("Failed to fetch Topics");
    }

    const data = await res.json();
    console.log("API Response Data:", data);

    return data;
  } catch (e) {
    console.log("Error loaading,topics", e);
    return { cats: [] };
  }
};

export default async function TopicList() {
  const { cats } = await getCats();
  console.log("here",cats)
  return (
    <>
      {cats?.map((cat: CatInfo) => (
        <div key={cat._id} className="items-start flex justify-between p-4 border boder-slate-200 my-3 gap-5 rounded-md">
          <div>
            <h2 className="font-bold text-2xl">{cat.name}</h2>
            <div className="text-sm">
              {cat.breed} | {cat.color}
            </div>
          </div>

          <div className=" flex gap-2">
            <RemoveBtn />
            <Link href={`/editTopic/${cat._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
