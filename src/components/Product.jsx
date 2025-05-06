import React, { useState } from 'react';

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('1.jpg'); // Main image source

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleImageChange = (imageSrc) => {
    setMainImage(imageSrc); // Update the main image based on the clicked thumbnail
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-6">
        {/* Main Image Section */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src={mainImage} // Set the main image dynamically
            alt="product"
            className="w-full rounded-lg"
          />
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2 px-6 lg:px-12 mt-6 lg:mt-0">
          <h2 className="text-3xl font-semibold">Walk Star Trainer</h2>
          <p className="text-gray-500 mt-2">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <span className="text-xl text-orange-500 font-semibold">Rp799.000</span>
            <span className="line-through text-gray-500 text-sm">Rp899.000</span>
          </div>

          {/* Quantity Control Section */}
          <div className="mt-4 flex items-center space-x-4">
            <button
              className="bg-gray-200 p-2 rounded-full"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="bg-gray-200 p-2 rounded-full"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-orange-500 text-white mt-6 py-2 px-6 rounded-full">
            Add to Cart
          </button>

          {/* Thumbnail Images Section */}
          <div className="mt-4 flex space-x-2">
            <img
              src="1.jpg"
              alt="thumbnail"
              className="w-20 h-20 object-cover rounded cursor-pointer"
              onClick={() => handleImageChange('1.jpg')}
            />
            <img
              src="2.jpg"
              alt="thumbnail"
              className="w-20 h-20 object-cover rounded cursor-pointer"
              onClick={() => handleImageChange('2.jpg')}
            />
            <img
              src="3.jpg"
              alt="thumbnail"
              className="w-20 h-20 object-cover rounded cursor-pointer"
              onClick={() => handleImageChange('3.jpg')}
            />
            <img
              src="4.jpg"
              alt="thumbnail"
              className="w-20 h-20 object-cover rounded cursor-pointer"
              onClick={() => handleImageChange('4.jpg')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
