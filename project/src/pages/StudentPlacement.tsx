import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPrediction, createPrompt } from '../utils/api';

const StudentPlacement: React.FC = () => {
  const [formData, setFormData] = useState({
    iq: 100,
    cgpa: 7.0,
    tenthMarks: 80,
    twelfthMarks: 80,
    communicationSkills: 7
  });

  const { data, error, isLoading, refetch } = useQuery(
    ['studentPlacement', formData],
    () => getPrediction(createPrompt.student(formData)),
    { enabled: false }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Student Placement Prediction 🎓</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              IQ Score (70-140)
            </label>
            <input
              type="number"
              name="iq"
              min="70"
              max="140"
              value={formData.iq}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CGPA (0.0-10.0)
            </label>
            <input
              type="number"
              name="cgpa"
              min="0"
              max="10"
              step="0.1"
              value={formData.cgpa}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              10th Marks (%)
            </label>
            <input
              type="number"
              name="tenthMarks"
              min="0"
              max="100"
              value={formData.tenthMarks}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              12th Marks (%)
            </label>
            <input
              type="number"
              name="twelfthMarks"
              min="0"
              max="100"
              value={formData.twelfthMarks}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Communication Skills (1-10)
            </label>
            <input
              type="number"
              name="communicationSkills"
              min="1"
              max="10"
              value={formData.communicationSkills}
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
          {isLoading ? 'Analyzing...' : 'Predict Placement'}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {error instanceof Error ? error.message : 'An error occurred'}
        </div>
      )}

      {data && (
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Placement Prediction</h2>
          <p className="text-gray-700">{data}</p>
        </div>
      )}
    </div>
  );
};

export default StudentPlacement; 