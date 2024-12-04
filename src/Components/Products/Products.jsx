import React, { useEffect, useState } from 'react';

const products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/Productslist.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg p-4">
          <img src={product.image} alt={product.name} className="w-[300px] h-40 object-cover rounded-t-lg" />
          <div className="mt-2">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-blue-500 font-bold mt-2">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default products;