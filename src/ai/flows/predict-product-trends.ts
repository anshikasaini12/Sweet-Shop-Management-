'use server';

/**
 * @fileOverview AI-powered tool to predict top-selling product trends by geography.
 *
 * - predictProductTrends - A function that handles the prediction of product trends.
 * - PredictProductTrendsInput - The input type for the predictProductTrends function.
 * - PredictProductTrendsOutput - The return type for the predictProductTrends function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictProductTrendsInputSchema = z.object({
  inventoryData: z
    .string()
    .describe('Current inventory data, including product names and stock levels.'),
  salesData: z.string().describe('Historical sales data, including product names and quantities sold per region.'),
});
export type PredictProductTrendsInput = z.infer<typeof PredictProductTrendsInputSchema>;

const PredictProductTrendsOutputSchema = z.object({
  regionalTrends: z.array(
    z.object({
      region: z.string().describe('Geographic region of the trend.'),
      product: z.string().describe('Predicted top-selling product in the region.'),
      targetDemographics: z.string().describe('Suggested target demographics for the product in the region.'),
    })
  ).
  describe('A geographical summary of predicted trends, and list of suggested target demographics.'),
  summary: z.string().describe('Summary for shop owners describing how and where they should focus sales.'),
  confidenceScore: z.number().describe('A confidence score (0-1) for the prediction.'),
  validityMetrics: z.string().describe('Metrics describing the validity of the trend analysis tool.'),
});
export type PredictProductTrendsOutput = z.infer<typeof PredictProductTrendsOutputSchema>;

export async function predictProductTrends(input: PredictProductTrendsInput): Promise<PredictProductTrendsOutput> {
  return predictProductTrendsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictProductTrendsPrompt',
  input: {schema: PredictProductTrendsInputSchema},
  output: {schema: PredictProductTrendsOutputSchema},
  prompt: `You are an expert in predicting product trends based on inventory and sales data.

  Analyze the following inventory and sales data to predict top-selling product trends by geography.

  Inventory Data:
  {{inventoryData}}

  Sales Data:
  {{salesData}}

  Provide a geographical summary of predicted trends, including the region, predicted top-selling product, and suggested target demographics.

  Also, provide a summary for shop owners describing how and where they should focus sales, a confidence score (0-1) for the prediction, and metrics describing the validity of the trend analysis tool.

  Ensure your response is formatted according to the specified output schema.`,
});

const predictProductTrendsFlow = ai.defineFlow(
  {
    name: 'predictProductTrendsFlow',
    inputSchema: PredictProductTrendsInputSchema,
    outputSchema: PredictProductTrendsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
