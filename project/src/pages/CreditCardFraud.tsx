import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPrediction, createPrompt } from '../utils/api';

const CreditCardFraud: React.FC = () => {
  const [formData, setFormData] = useState({
    cardHolderName: '',
    cardLastFourDigits: '',
    expiryDate: '',
    cvv: '',
    amount: 0,
    transactionType: 'Online',
    transactionFrequency: 'Low',
    location: ''
  });

  const { data, error, isLoading, refetch } = useQuery(
    ['creditCardFraud', formData],
    () => getPrediction(createPrompt.creditCard(formData)),
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
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Credit Card Fraud Detection 💳</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Holder Name
            </label>
            <input
              type="text"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
              pattern="[A-Za-z\s]+"
              title="Please enter a valid name (letters and spaces only)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last 4 Digits
            </label>
            <input
              type="text"
              name="cardLastFourDigits"
              value={formData.cardLastFourDigits}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
              pattern="[0-9]{4}"
              maxLength={4}
              title="Please enter exactly 4 digits"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full px-3 py-2 border rounded-md"
              required
              pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
              maxLength={5}
              title="Please enter a valid expiry date (MM/YY)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
              pattern="[0-9]{3,4}"
              maxLength={4}
              title="Please enter 3 or 4 digits"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount ($)
            </label>
            <input
              type="number"
              name="amount"
              min="0"
              step="0.01"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Transaction Type
            </label>
            <select
              name="transactionType"
              value={formData.transactionType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="Online">Online</option>
              <option value="In-Store">In-Store</option>
              <option value="ATM">ATM</option>
              <option value="International">International</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Transaction Frequency
            </label>
            <select
              name="transactionFrequency"
              value={formData.transactionFrequency}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="Low">Low (0-5 per month)</option>
              <option value="Medium">Medium (6-15 per month)</option>
              <option value="High">High (16+ per month)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country"
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
          {isLoading ? 'Analyzing...' : 'Check for Fraud'}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {error instanceof Error ? error.message : 'An error occurred'}
        </div>
      )}

      {data && (
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Fraud Analysis Result</h2>
          <p className="text-gray-700">{data}</p>
        </div>
      )}
    </div>
  );
};

export default CreditCardFraud; 