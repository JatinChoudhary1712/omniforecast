# OmniForecast - AI Prediction Platform

A Flask-based AI web application designed to provide intelligent predictions across multiple domains. Built with React, TypeScript, and powered by OpenAI's GPT models.

## Features

- **Diamond Price Prediction**: Predict diamond prices based on characteristics like carat, depth, dimensions, clarity, and cut quality.
- **Diabetes Risk Assessment**: Evaluate diabetes risk using health metrics including age, BMI, glucose levels, and more.
- **House Price Prediction**: Estimate house prices considering location, size, bedrooms, and other property features.
- **Customer Segmentation**: Analyze customer profiles based on income, spending patterns, and purchase history.
- **Credit Card Fraud Detection**: Identify potential fraudulent transactions using transaction patterns and user behavior.
- **Student Placement Prediction**: Predict student placement likelihood using academic performance metrics.

## Tech Stack

- Frontend: React + TypeScript + Vite
- Styling: TailwindCSS
- State Management: React Query
- Routing: React Router
- API Integration: Axios
- AI: OpenAI GPT-3.5

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/omniforecast.git
cd omniforecast
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file in the root directory and add your OpenAI API key
```env
VITE_OPENAI_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

6. Start the production server
```bash
npm start
```

## Project Structure

```
project/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/        # Page components for each prediction type
│   ├── utils/        # Utility functions and API handlers
│   └── types/        # TypeScript type definitions
├── public/           # Static assets
└── dist/            # Production build output
```

## Deployment

The application can be deployed to various platforms:

- **Glitch**: Import directly from GitHub or upload as ZIP
- **Vercel**: Connect to GitHub repository for automatic deployments
- **Netlify**: Deploy through GitHub integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for providing the GPT models
- React and Vite teams for the amazing development experience
- TailwindCSS for the utility-first CSS framework

## Contact

Aditya Bathla - [Your Email or Contact Information]

Project Link: [https://github.com/your-username/omniforecast](https://github.com/your-username/omniforecast) 