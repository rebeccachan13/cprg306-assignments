import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-gray-950 text-gray-50 p-4">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
