export default function AddTopic() {
  return (
    <form
      action="
        "
      className="flex flex-col gap-3"
    >
      <input
        type="text"
        placeholder="Enter Cat Name"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        placeholder="Enter Cat Breed"
        className="border border-slate-500 px-8 py-2"
      />
          <input
        type="text"
        placeholder="Enter Cat Color"
        className="border border-slate-500 px-8 py-2"
      />

      <button className="bg-green-300 w-fit p-3 rounded-md">Submit</button>
    </form>
  );
}
