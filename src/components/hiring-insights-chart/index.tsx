"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { useMobile } from "./use-mobile";
import { chartConfig } from "./config";
import { DesktopLegend, MobileLegendPopover } from "./legends";
import { useEffect, useState } from "react";
import { getHiringInsights, HiringInsightsData } from "./utils";
import { Loader2 } from "lucide-react";

export default function HiringInsightsChart() {
  const isMobile = useMobile();

  const [data, setData] = useState<null | HiringInsightsData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHiringInsights().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <Card className="w-full shadow-lg max-w-4xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h2
            className={`font-bold text-foreground ${
              isMobile ? "text-lg" : "text-2xl"
            }`}
          >
            Hiring Insights
          </h2>
          <div className="flex gap-2 items-center">
            {isMobile && <MobileLegendPopover />}
            <Select defaultValue="30days" aria-label="Select time period">
              <SelectTrigger className={isMobile ? "w-[130px]" : "w-[140px]"}>
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="6months">Last 6 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Loading data...</span>
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className={isMobile ? "h-[300px] w-full" : "h-[400px] w-full"}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data as HiringInsightsData}
                margin={
                  isMobile
                    ? { top: 20, right: 10, left: -20, bottom: 20 }
                    : { top: 20, right: 20, left: 0, bottom: 20 }
                }
                accessibilityLayer
              >
                <CartesianGrid
                  strokeDasharray="0"
                  horizontal={true}
                  vertical={false}
                  className="stroke-muted"
                  aria-hidden="true"
                />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  className="text-xs fill-muted-foreground"
                  aria-label="Day"
                  interval={isMobile ? 4 : "preserveStartEnd"}
                  tick={{ fontSize: isMobile ? 10 : 12 }}
                />
                <YAxis
                  domain={[0, 90]}
                  ticks={
                    isMobile ? [0, 30, 60, 90] : [0, 15, 30, 45, 60, 75, 90]
                  }
                  tickFormatter={(value) =>
                    isMobile ? `${value}` : `${value}%`
                  }
                  tickLine={false}
                  axisLine={false}
                  className="text-xs fill-muted-foreground"
                  aria-label="Percentage"
                  width={isMobile ? 20 : 40}
                  tick={{ fontSize: isMobile ? 10 : 12 }}
                  hide={isMobile}
                />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Day
                              </span>
                              <span className="font-bold text-muted-foreground">
                                {label}
                              </span>
                            </div>
                          </div>
                          <div className="mt-1 grid gap-1">
                            {payload.map((entry, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <div
                                  className="h-2 w-2 rounded-full"
                                  style={{ backgroundColor: entry.color }}
                                />
                                <span
                                  className={`text-muted-foreground sm:text-sm text-xs`}
                                >
                                  {
                                    chartConfig[
                                      entry.dataKey as keyof typeof chartConfig
                                    ]?.label
                                  }
                                </span>
                                <span className="font-medium">
                                  {entry.value}%
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                  cursor={{ stroke: "hsl(var(--muted))", strokeWidth: 1 }}
                />
                <Line
                  type="monotone"
                  dataKey="applicationToInterview"
                  stroke={chartConfig.applicationToInterview.color}
                  strokeWidth={isMobile ? 1.5 : 2}
                  dot={false}
                  activeDot={{
                    r: isMobile ? 4 : 6,
                    stroke: chartConfig.applicationToInterview.color,
                    strokeWidth: 2,
                    fill: chartConfig.applicationToInterview.color,
                  }}
                  aria-label="Application to Interview Rate trend line"
                />
                <Line
                  type="monotone"
                  dataKey="offerAcceptance"
                  stroke={chartConfig.offerAcceptance.color}
                  strokeWidth={isMobile ? 1.5 : 2}
                  dot={false}
                  activeDot={{
                    r: isMobile ? 4 : 6,
                    stroke: chartConfig.offerAcceptance.color,
                    strokeWidth: 2,
                    fill: chartConfig.offerAcceptance.color,
                  }}
                  aria-label="Offer Acceptance Rate trend line"
                />
                <Line
                  type="monotone"
                  dataKey="rejection"
                  stroke={chartConfig.rejection.color}
                  strokeWidth={isMobile ? 1.5 : 2}
                  dot={false}
                  activeDot={{
                    r: isMobile ? 4 : 6,
                    stroke: chartConfig.rejection.color,
                    strokeWidth: 2,
                    fill: chartConfig.rejection.color,
                  }}
                  aria-label="Rejection Rate trend line"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}

        {!isMobile && <DesktopLegend />}
      </CardContent>
    </Card>
  );
}
