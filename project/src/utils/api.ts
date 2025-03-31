import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const api = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const getPrediction = async (prompt: string) => {
  try {
    const response = await api.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { 
          role: 'system', 
          content: 'You are a precise prediction model. Provide only the numerical result without any additional text or explanation.' 
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.3
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to get prediction. Please try again later.');
  }
};

export const createPrompt = {
  diamond: (data: any) => 
    `Predict diamond price in USD based on: carat=${data.carat}, depth=${data.depth}, table=${data.table}, dimensions(x=${data.x}mm, y=${data.y}mm, z=${data.z}mm), clarity=${data.clarity}/10, cut=${data.cutQuality}/5`,
  
  diabetes: (data: any) =>
    `Predict diabetes risk (0-100%) based on: age=${data.age}, BMI=${data.bmi}, glucose=${data.glucose}mg/dL, BP=${data.bloodPressure}mmHg, insulin=${data.insulin}muU/ml, pregnancies=${data.pregnancies}`,
  
  customer: (data: any) =>
    `Analyze customer profile from ${data.continent}: income=$${data.totalIncome}, spent=$${data.moneySpent}, quantity=${data.quantityPurchased} items, discount=$${data.discount} and categorize into market segment.`,
  
  house: (data: any) =>
    `Predict house price in USD based on: bedrooms=${data.bedrooms}, bathrooms=${data.bathrooms}, living_area=${data.livingArea}sqft, lot_area=${data.lotArea}sqft, floors=${data.floors}, current_price=$${data.price}, type=${data.type}, garage=${data.garage}`,

  creditCard: (data: any) =>
    `Analyze credit card transaction for fraud risk (0-100%) based on: cardholder=${data.cardHolderName}, last_digits=${data.cardLastFourDigits}, expiry=${data.expiryDate}, amount=$${data.amount}, type=${data.transactionType}, frequency=${data.transactionFrequency}, location=${data.location}`,

  student: (data: any) =>
    `Predict student placement likelihood (0-100%) based on: IQ=${data.iq}, CGPA=${data.cgpa}, 10th_marks=${data.tenthMarks}%, 12th_marks=${data.twelfthMarks}%, communication=${data.communicationSkills}/10`
};