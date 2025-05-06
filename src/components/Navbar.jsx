export default function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="font-bold text-xl">sneakers</div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">Home</button>
        <button className="text-gray-600 hover:text-gray-800">Shop</button>
        <button className="text-gray-600 hover:text-gray-800">Contact</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full">Cart</button>
      </div>
    </div>
  </nav>
);
};