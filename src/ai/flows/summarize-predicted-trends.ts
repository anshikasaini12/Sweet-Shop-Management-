'use server';

/**
 * @fileOverview AI agent that summarizes predicted sales trends by geography, target demographics, and sales focus.
 *
 * - summarizePredictedTrends - A function that generates a trend summary for shop owners.
 * - SummarizePredictedTrendsInput - The input type for the summarizePredictedTrends function.
 * - SummarizePredictedTrendsOutput - The return type for the summarizePredictedTrends function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePredictedTrendsInputSchema = z.object({
  inventoryData: z.string().describe('Current inventory data, including product names and quantities.'),
  salesData: z.string().describe('Recent sales data, including product names, quantities, and locations.'),
});

export type SummarizePredictedTrendsInput = z.infer<
  typeof SummarizePredictedTrendsInputSchema
>;

const SummarizePredictedTrendsOutputSchema = z.object({
  geographicalSummary: z
    .string()
    .describe('A summary of predicted trends by geographical area.'),
  targetDemographics: z
    .string()
    .describe('Suggested target demographics based on predicted trends.'),
  salesFocusSummary: z
    .string()
    .describe(
      'A summary for shop owners describing how and where they should focus sales.'
    ),
});

export type SummarizePredictedTrendsOutput = z.infer<
  typeof SummarizePredictedTrendsOutputSchema
>;

export async function summarizePredictedTrends(
  input: SummarizePredictedTrendsInput
): Promise<SummarizePredictedTrendsOutput> {
  return summarizePredictedTrendsFlow(input);
}

const summarizePredictedTrendsPrompt = ai.definePrompt({
  name: 'summarizePredictedTrendsPrompt',
  input: {schema: SummarizePredictedTrendsInputSchema},
  output: {schema: SummarizePredictedTrendsOutputSchema},
  prompt: `You are an AI assistant helping sweet shop owners understand sales trends.

  Analyze the following inventory and sales data to predict top-selling product trends by geography, identify target demographics, and suggest where shop owners should focus their sales efforts.

  Inventory Data: {{{inventoryData}}}
  Sales Data: {{{salesData}}}

  Provide the following:
  - A geographical summary of predicted trends.
  - Suggested target demographics.
  - A summary for shop owners describing how and where they should focus sales.
  `,
});

const summarizePredictedTrendsFlow = ai.defineFlow(
  {
    name: 'summarizePredictedTrendsFlow',
    inputSchema: SummarizePredictedTrendsInputSchema,
    outputSchema: SummarizePredictedTrendsOutputSchema,
  },
  async input => {
    const {output} = await summarizePredictedTrendsPrompt(input);
    return output!;
  }
);
