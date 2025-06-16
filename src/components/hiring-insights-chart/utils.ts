import chartData from "./data.json";

// Simulation of fetching hiring insights data
export type HiringInsightsData = typeof chartData;
export function getHiringInsights(): Promise<typeof chartData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chartData);
    }, 1000);
  });
}
