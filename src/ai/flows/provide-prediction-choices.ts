'use server';

/**
 * @fileOverview An AI agent that provides multiple prediction options for product trends.
 *
 * - providePredictionChoices - A function that provides multiple prediction options with metrics.
 * - PredictionChoicesInput - The input type for the providePredictionChoices function.
 * - PredictionChoicesOutput - The return type for the providePredictionChoices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictionChoicesInputSchema = z.object({
  inventoryData: z.string().describe('Current inventory data.'),
  salesData: z.string().describe('Recent sales data.'),
  geography: z.string().describe('The geographical area to analyze.'),
});
export type PredictionChoicesInput = z.infer<typeof PredictionChoicesInputSchema>;

const PredictionChoicesOutputSchema = z.object({
  predictions: z.array(
    z.object({
      trendSummary: z.string().describe('A summary of the predicted trend.'),
      targetDemographics: z.string().describe('Suggested target demographics for the trend.'),
      salesFocus: z.string().describe('Guidance for shop owners on where to focus sales efforts.'),
      certainty: z.number().describe('A metric describing the certainty of the prediction (0-1).'),
      validity: z.string().describe('Factors influencing the validity of the prediction.'),
    })
  ).describe('An array of prediction options with associated metrics.'),
});
export type PredictionChoicesOutput = z.infer<typeof PredictionChoicesOutputSchema>;

export async function providePredictionChoices(input: PredictionChoicesInput): Promise<PredictionChoicesOutput> {
  return providePredictionChoicesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictionChoicesPrompt',
  input: {schema: PredictionChoicesInputSchema},
  output: {schema: PredictionChoicesOutputSchema},
  prompt: `You are an AI assistant designed to provide shop owners with multiple prediction options for product trends, along with metrics describing the certainty and validity of each prediction.

Analyze the following inventory and sales data for the specified geography to generate several distinct prediction options. For each prediction, provide a trend summary, suggest target demographics, and provide guidance for shop owners on where to focus their sales efforts.

Also, include a certainty metric (0-1) and factors influencing the validity of each prediction.

Inventory Data: {{{inventoryData}}}
Sales Data: {{{salesData}}}
Geography: {{{geography}}}

Output multiple prediction options in JSON format:
{{$instructions=Provide multiple prediction options in JSON format.}}`,
});

const providePredictionChoicesFlow = ai.defineFlow(
  {
    name: 'providePredictionChoicesFlow',
    inputSchema: PredictionChoicesInputSchema,
    outputSchema: PredictionChoicesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
