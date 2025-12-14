'use server'

import { providePredictionChoices } from '@/ai/flows/provide-prediction-choices'
import { inventoryDataForAI, salesDataForAI } from '@/lib/data'

export async function getTrendPredictions() {
  try {
    const predictions = await providePredictionChoices({
      inventoryData: inventoryDataForAI,
      salesData: salesDataForAI,
      geography: 'Global',
    })
    return { success: true, data: predictions }
  } catch (error) {
    console.error('Error fetching trend predictions:', error)
    return { success: false, error: 'Failed to fetch trend predictions.' }
  }
}
