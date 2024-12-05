"use client"
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
interface RmProps{
    id:string
}
export default function RemoveBtn({id}:RmProps) {
    const router = useRouter();
    const removeCat = async () =>{
        const confirmed = confirm('Are you sure?');

        if(confirmed){
            const res =await fetch(`http://localhost:3002/api/cats/?id=${id}`,{method:"DELETE"})

            if(res.ok){
                router.refresh();
            }
        }
    }


  return (
    <button onClick={removeCat}>
      <HiOutlineTrash size={24} className="text-slate-400" />
    </button>
  );
}
