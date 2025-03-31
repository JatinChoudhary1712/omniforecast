import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPrediction, createPrompt } from '../utils/api';

const DiamondPrediction: React.FC = () => {
  const [formData, setFormData] = useState({
    carat: 0.2,
    depth: 50,
    table: 50,
    x: 3,
    y: 3,
    z: 2,
    clarity: 1,
    cutQuality: 1
  });

  const { data, error, isLoading, refetch } = useQuery(
    ['diamondPrediction', formData],
    () => getPrediction(createPrompt.diamond(formData)),
    { enabled: false }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: Number(e.target.value)
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Diamond Price Prediction 💎</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Carat (0.2 - 5.0)
            </label>
            <input
              type="number"
              name="carat"
              step="0.1"
              min="0.2"
              max="5.0"
              value={formData.carat}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Depth (50 - 70)
            </label>
            <input
              type="number"
              name="depth"
              step="0.1"
              min="50"
              max="70"
              value={formData.depth}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Table (50 - 90)
            </label>
            <input
              type="number"
              name="table"
              step="0.1"
              min="50"
              max="90"
              value={formData.table}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              X Dimension (3 - 10)
            </label>
            <input
              type="number"
              name="x"
              step="0.1"
              min="3"
              max="10"
              value={formData.x}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Y Dimension (3 - 10)
            </label>
            <input
              type="number"
              name="y"
              step="0.1"
              min="3"
              max="10"
              value={formData.y}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Z Dimension (2 - 7)
            </label>
            <input
              type="number"
              name="z"
              step="0.1"
              min="2"
              max="7"
              value={formData.z}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Clarity (1 - 10)
            </label>
            <input
              type="number"
              name="clarity"
              min="1"
              max="10"
              value={formData.clarity}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cut Quality (1 - 5)
            </label>
            <input
              type="number"
              name="cutQuality"
              min="1"
              max="5"
              value={formData.cutQuality}
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
          <h2 className="text-xl font-semibold mb-2">Prediction Result</h2>
          <p className="text-gray-700">{data}</p>
        </div>
      )}
    </div>
  );
};

export default DiamondPrediction;