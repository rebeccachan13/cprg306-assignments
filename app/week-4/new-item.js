"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category
        };

        console.log(item);
                  
        alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (  
      <>
        <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-800 text-black max-w-sm w-full">
          <div className="mb-4">
            <input placeholder="Item name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max="99"
              required className="w-30 ml-1 border-2 border-gray-300 p-2 rounded-lg"
            />
            <select className="ml-1 border-2 border-gray-300 p-2 rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value disabled>Category</option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">+</button>
        </form>
      </> 
      );
    }