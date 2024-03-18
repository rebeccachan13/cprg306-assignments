"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const [ items, setItems ] = useState([]);
    const [ selectedItemName, setSelectedItemName ] = useState(" ");
    const { user } = useUserAuth();

    const handleAddItem = async (newItem) => {
      const itemId = await addItem(user.uid, newItem);
      newItem.id = itemId;
      setItems([...items, newItem]);
  }

  const loadItems = async () => {
    if (user) {
        const items = await getItems(user.uid);
        setItems(items);
    }
}

useEffect(() => {
  loadItems();
}, [user]); 


    const handleItemSelect = (selectedItem) => {
      const cleanedItemName = selectedItem.name.split(',')[0].trim();
      const cleanName = cleanedItemName.replace(/[^a-zA-Z\s]+$/, ""); 
      setSelectedItemName(cleanName);
  };
  


  if (!user) {
    return <p>Your need to be signed in to view this page.</p>;
}   

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
