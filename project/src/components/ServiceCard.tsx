import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { PredictionService } from '../types';

interface ServiceCardProps {
  service: PredictionService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 text-blue-600 mb-4">
          <Icon />
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <button
          onClick={() => navigate(service.path)}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Get Prediction
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;