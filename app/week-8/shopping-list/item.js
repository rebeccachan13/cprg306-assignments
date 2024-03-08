export default function Item({ name, quantity, category, onSelect }) {
    const handleClick = () => {
        onSelect({ name, quantity, category });
    };


    return (
        <>
            <li onClick={handleClick} style={{ cursor: 'pointer' }} className="bg-gray-900 max-w-sm p-2 m-4">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-sm">Buy {quantity} in {category}</p>
            </li>
        </>
    );
}
        
  