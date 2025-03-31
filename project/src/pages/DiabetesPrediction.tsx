import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPrediction, createPrompt } from '../utils/api';

const DiabetesPrediction: React.FC = () => {
  const [formData, setFormData] = useState({
    age: 45,
    bmi: 25,
    glucose: 100,
    bloodPressure: 120,
    insulin: 80,
    pregnancies: 0
  });

  const { data, error, isLoading, refetch } = useQuery(
    ['diabetesPrediction', formData],
    () => getPrediction(createPrompt.diabetes(formData)),
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
      <h1 className="text-3xl font-bold mb-8">Diabetes Risk Assessment</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              name="age"
              min="0"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              BMI
            </label>
            <input
              type="number"
              name="bmi"
              step="0.1"
              min="0"
              value={formData.bmi}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Glucose Level (mg/dL)
            </label>
            <input
              type="number"
              name="glucose"
              min="0"
              value={formData.glucose}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Blood Pressure (mmHg)
            </label>
            <input
              type="number"
              name="bloodPressure"
              min="0"
              value={formData.bloodPressure}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Insulin Level (mu U/ml)
            </label>
            <input
              type="number"
              name="insulin"
              min="0"
              value={formData.insulin}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Pregnancies
            </label>
            <input
              type="number"
              name="pregnancies"
              min="0"
              value={formData.pregnancies}
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
          {isLoading ? 'Analyzing...' : 'Get Risk Assessment'}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {error instanceof Error ? error.message : 'An error occurred'}
        </div>
      )}

      {data && (
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Assessment Result</h2>
          <p className="text-gray-700">{data}</p>
        </div>
      )}
    </div>
  );
};

export default DiabetesPrediction;