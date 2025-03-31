import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';

const DiamondPrediction = React.lazy(() => import('./pages/DiamondPrediction'));
const DiabetesPrediction = React.lazy(() => import('./pages/DiabetesPrediction'));
const CustomerSegmentation = React.lazy(() => import('./pages/CustomerSegmentation'));
const HousePrediction = React.lazy(() => import('./pages/HousePrediction'));
const CreditCardFraud = React.lazy(() => import('./pages/CreditCardFraud'));
const StudentPlacement = React.lazy(() => import('./pages/StudentPlacement'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <TabNavigation />
            <main className="flex-grow py-8">
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-[60vh]">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/diamond" element={<DiamondPrediction />} />
                  <Route path="/diabetes" element={<DiabetesPrediction />} />
                  <Route path="/customer" element={<CustomerSegmentation />} />
                  <Route path="/house" element={<HousePrediction />} />
                  <Route path="/credit-card" element={<CreditCardFraud />} />
                  <Route path="/student" element={<StudentPlacement />} />
                </Routes>
              </Suspense>
            </main>
            <footer className="bg-white border-t py-4 text-center text-gray-600">
              © 2025 Omniforecast by Aditya Bathla
            </footer>
          </div>
        </ErrorBoundary>
      </Router>
    </QueryClientProvider>
  );
}

export default App;