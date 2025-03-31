import React from 'react';
import { Link } from 'react-router-dom';

const PredictionCard: React.FC<{
  title: string;
  description: string;
  path: string;
}> = ({ title, description, path }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      to={path}
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
    >
      Predict Now
    </Link>
  </div>
);

const HomePage: React.FC = () => {
  const predictions = [
    {
      title: "Diamond Price",
      description: "Predict diamond prices based on various characteristics like carat, depth, dimensions, clarity, and cut quality.",
      path: "/diamond"
    },
    {
      title: "Diabetes Risk",
      description: "Assess diabetes risk using health metrics including age, BMI, glucose levels, blood pressure, and other factors.",
      path: "/diabetes"
    },
    {
      title: "House Price",
      description: "Estimate house prices considering factors like location, size, bedrooms, bathrooms, and other property features.",
      path: "/house"
    },
    {
      title: "Customer Segmentation",
      description: "Analyze customer profiles based on income, spending patterns, location, and purchase history.",
      path: "/customer"
    },
    {
      title: "Credit Card Fraud",
      description: "Detect potential credit card fraud by analyzing transaction patterns, amounts, and user behavior.",
      path: "/credit-card"
    },
    {
      title: "Student Placement",
      description: "Predict student placement likelihood using academic performance, IQ, and communication skills.",
      path: "/student"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* About Section */}
      <section className="text-center py-12 mb-12 bg-white rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold mb-6">Welcome to OmniForecast</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            A Flask-based AI web application designed to provide intelligent predictions across multiple domains. 
            Our platform offers user-friendly interfaces for data input and delivers insights based on trained 
            machine learning models.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-sm text-gray-500">Prediction Models</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-500">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8">Our Prediction Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {predictions.map((prediction) => (
            <PredictionCard
              key={prediction.path}
              title={prediction.title}
              description={prediction.description}
              path={prediction.path}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12 bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-6">Why Choose OmniForecast?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Advanced AI Models</h3>
            <p className="text-gray-600">
              Powered by state-of-the-art machine learning algorithms for accurate predictions.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Simple and intuitive design makes it easy to input data and get predictions.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Real-Time Results</h3>
            <p className="text-gray-600">
              Get instant predictions and insights for your data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;