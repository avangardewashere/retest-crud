export default function EditTopicForm() {
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

      <button className="bg-green-300 w-fit p-3 rounded-md">Update Information</button>
    </form>
  );
}
