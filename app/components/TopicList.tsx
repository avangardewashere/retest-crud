import Link from "next/link";
import RemoveBtn from "./removeBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicList() {
  return (
    <div className="items-start flex justify-between p-4 border boder-slate-200 mx-3 gap-5 rounded-md">
      <div>
        <h2 className="font-bold text-2xl">Topic Title</h2>
        <div className="text-sm">Topic Description</div>
      </div>

      <div className=" flex gap-2">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
}
