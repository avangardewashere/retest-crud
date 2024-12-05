export default function EditTopicForm() {
  return (
    <form
      action="
      "
      className="flex flex-col gap-3"
    >
      <input
        type="text"
        placeholder="Update Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        placeholder="Update Topic Description"
        className="border border-slate-500 px-8 py-2"
      />

      <button className="bg-green-300 w-fit p-3 rounded-md">Update Information</button>
    </form>
  );
}
