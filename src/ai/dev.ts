import { config } from 'dotenv';
config();

import '@/ai/flows/provide-prediction-choices.ts';
import '@/ai/flows/predict-product-trends.ts';
import '@/ai/flows/summarize-predicted-trends.ts';