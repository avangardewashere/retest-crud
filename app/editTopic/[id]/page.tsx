import EditTopicForm from "@/app/components/EditTopicForm";
interface EditTopicParams {
  params: {
    id: string;
  };
}

const getTopicById = async (id:string) => {
  try {
    const res = await fetch(`http://localhost:3002/api/cats/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    console.log(res)
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }: EditTopicParams) {
  const { id } = params;
  const {cat} = await getTopicById(id);
  const {name,breed,color} = cat;
 
  return <EditTopicForm id={id} />;
}
