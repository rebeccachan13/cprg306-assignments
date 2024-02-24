"use client";

import Item from './item';
import  { useState } from 'react';
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortedName = items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } else {    
            return 0;
        }
    });

      return (
        <>
            <div>
                <label>Sort By:</label>
                <button onClick={() => setSortBy('name')} className={`p-1 m-2 w-32 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}>Name</button>
                <button onClick={() => setSortBy('category')} className={`p-1 m-2 w-32 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'}`}>Category</button>    
                
            </div>
            <ul>
                {sortedName.map((item) => (
                        <Item 
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} />
                  ))}
            </ul>
        </>
      );
    } 