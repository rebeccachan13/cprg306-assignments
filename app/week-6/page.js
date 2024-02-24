"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [ items, setItems ] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }


  return (
    <main className="bg-gray-950 text-gray-50 p-4">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  );
}
