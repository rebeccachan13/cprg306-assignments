export default function Item({name, quantity, category}) {
  return (
    <li className="bg-gray-900 max-w-sm p-2 m-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm">Buy {quantity} in {category}</p>
    </li>
    );
}
      
