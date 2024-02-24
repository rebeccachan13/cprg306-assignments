"use client";

import Item from './item';
import  { useState } from 'react';
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');
    const [grouped, setGrouped] = useState(false);

    const sortedName = items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } else {    
            return 0;
        }
    });

    const groupedItems = () => {
        const groupedData = sortedName.reduce((result, item) => {
            if (!result[item.category]) {
                result[item.category] = [];
            }
            result[item.category].push(item);
            return result;
        }, {});

        return Object.entries(groupedData).sort((a, b) => a[0].localeCompare(b[0]));
    };

    const handleGroupButtonClick = () => {
        setGrouped(!grouped);
    };

      return (
        <>
            <div>
                <label>Sort By:</label>
                <button onClick={() => setSortBy('name')} className={`p-1 m-2 w-32 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}>Name</button>
                <button onClick={() => setSortBy('category')} className={`p-1 m-2 w-32 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'}`}>Category</button>  
                <button onClick={handleGroupButtonClick} className={`p-1 m-2 w-32 ${grouped ? 'bg-orange-500' : 'bg-orange-700'}`}>Grouped Category</button>       
                
            </div>
            <ul>
                {grouped
                    ? groupedItems().map(([category, items]) => (
                          <li key={category}>
                              <h3 className="text-xl capitalize">{category}</h3>
                              <ul>
                                  {items.map((item) => (
                                      <Item
                                          key={item.id}
                                          name={item.name}
                                          quantity={item.quantity}
                                          category={item.category}
                                      />
                                  ))}
                              </ul>
                          </li>
                      ))
                      : sortedName.map((item) => (
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