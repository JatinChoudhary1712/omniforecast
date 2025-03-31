import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPrediction, createPrompt } from '../utils/api';

const HousePrediction: React.FC = () => {
  const [formData, setFormData] = useState({
    bedrooms: 1,
    bathrooms: 1,
    livingArea: 270,
    lotArea: 211,
    floors: 1,
    price: 78000,
    type: 'Single Family',
    garage: false
  });

  const { data, error, isLoading, refetch } = useQuery(
    ['housePrediction', formData],
    () => getPrediction(createPrompt.house(formData)),
    { enabled: false }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked :
              type === 'select-one' ? value :
              Number(value)
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">House Price Prediction 🏠</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Bedrooms (1 - 12)
            </label>
            <input
              type="number"
              name="bedrooms"
              min="1"
              max="12"
              value={formData.bedrooms}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Bathrooms (1 - 8)
            </label>
            <input
              type="number"
              name="bathrooms"
              min="1"
              max="8"
              step="0.5"
              value={formData.bathrooms}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Living Area (270 - 1,257 sq ft)
            </label>
            <input
              type="number"
              name="livingArea"
              min="270"
              max="1257"
              value={formData.livingArea}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lot Area (211 - 1,074 sq ft)
            </label>
            <input
              type="number"
              name="lotArea"
              min="211"
              max="1074"
              value={formData.lotArea}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Floors (1 - 3)
            </label>
            <input
              type="number"
              name="floors"
              min="1"
              max="3"
              step="0.5"
              value={formData.floors}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price ($78,000 - $7,700,000)
            </label>
            <input
              type="number"
              name="price"
              min="78000"
              max="7700000"
              step="1000"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of House
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="Single Family">Single Family</option>
              <option value="Multi Family">Multi Family</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Condo">Condo</option>
            </select>
          </div>

          <div className="flex items-center">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="garage"
                checked={formData.garage}
                onChange={handleChange}
                className="rounded text-blue-600 w-5 h-5"
              />
              <span className="text-sm text-gray-700">Has Garage</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {isLoading ? 'Calculating...' : 'Predict'}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {error instanceof Error ? error.message : 'An error occurred'}
        </div>
      )}

      {data && (
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Price Estimate</h2>
          <p className="text-gray-700">{data}</p>
        </div>
      )}
    </div>
  );
};

export default HousePrediction;