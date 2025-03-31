import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPrediction, createPrompt } from '../utils/api';

const CustomerSegmentation: React.FC = () => {
  const [formData, setFormData] = useState({
    totalIncome: 1000,
    moneySpent: 10,
    continent: 'Asia',
    quantityPurchased: 5,
    discount: 100
  });

  const { data, error, isLoading, refetch } = useQuery(
    ['customerSegmentation', formData],
    () => getPrediction(createPrompt.customer(formData)),
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
      [name]: type === 'select-one' ? value : Number(value)
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Customer Segmentation 📊</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Income ($1,000 - $10,000)
            </label>
            <input
              type="number"
              name="totalIncome"
              min="1000"
              max="10000"
              step="100"
              value={formData.totalIncome}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Money Spent ($10 - $1,800)
            </label>
            <input
              type="number"
              name="moneySpent"
              min="10"
              max="1800"
              step="1"
              value={formData.moneySpent}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Continent
            </label>
            <select
              name="continent"
              value={formData.continent}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="Asia">Asia</option>
              <option value="America">America</option>
              <option value="Europe">Europe</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity of Goods (5 - 50)
            </label>
            <input
              type="number"
              name="quantityPurchased"
              min="5"
              max="50"
              value={formData.quantityPurchased}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Discount ($100 - $250)
            </label>
            <input
              type="number"
              name="discount"
              min="100"
              max="250"
              step="1"
              value={formData.discount}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {isLoading ? 'Analyzing...' : 'Predict'}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {error instanceof Error ? error.message : 'An error occurred'}
        </div>
      )}

      {data && (
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Segmentation Result</h2>
          <p className="text-gray-700">{data}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerSegmentation;