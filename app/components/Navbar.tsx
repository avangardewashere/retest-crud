import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-rose-400 rounded-md px-8 py-3">
      <Link className="text-white font-bold" href="/">
        Home
      </Link>
      <Link className={'bg-blue-400 p-2 rounded-md'} href="/addTopic">Add Topic</Link>
    </div>
  );
}
