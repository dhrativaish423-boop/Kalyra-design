import React from 'react';

export default function KingCollection() {
  const products = [
    { id: 1, name: "Regal Ivory Sherwani Blueprint", price: "$249.00", image: "/king.jpg", rating: 5 },
    { id: 2, name: "Royal Jodhpuri Suit Map", price: "$189.00", image: "/king.jpg", rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EC] p-6 text-[#1A1A1A]">
      <h1 className="text-3xl font-bold text-center text-[#4B1E3F] font-serif my-6">King Collection</h1>
      <p className="text-center text-gray-600 mb-8">Regal silhouettes and heritage craftsmanship manufacturing guides.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <img src={p.image} alt={p.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[#D4AF37] font-bold text-lg">{p.price}</span>
              <div className="text-[#D4AF37]">
                {Array(p.rating).fill("💎")}
              </div>
            </div>
            <button className="w-full mt-4 bg-[#D4AF37] text-white py-2 rounded-md font-semibold hover:bg-opacity-90">
              PURCHASE BLUEPRINT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
      }
