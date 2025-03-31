export interface PredictionService {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export interface DiamondInput {
  carat: number;
  cut: string;
  color: string;
  clarity: string;
}

export interface DiabetesInput {
  glucose: number;
  bloodPressure: number;
  bmi: number;
  age: number;
}

export interface CustomerInput {
  age: number;
  income: number;
  spendingScore: number;
  shoppingFrequency: number;
}

export interface HouseInput {
  location: string;
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  amenities: string[];
}