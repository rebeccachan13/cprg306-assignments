"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [ items, setItems ] = useState(itemsData);
    const [ selectedItemName, setSelectedItemName ] = useState(" ");

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const handleItemSelect = (selectedItem) => {
      const cleanedItemName = selectedItem.name.split(',')[0].trim();
      const cleanName = cleanedItemName.replace(/[^a-zA-Z\s]+$/, ""); // Fix the variable name
      setSelectedItemName(cleanName);
  };
  


  return (
    <main className="bg-gray-950 text-gray-50 p-2 m-2 flex">
      <div>
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={items} onItemSelect={handleItemSelect}/>
      </div>
      <div className="m-2 w-1/2 pl-4">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}
