
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

// Sample analytics data - in a real app, this would come from an analytics API
const analyticsData = [
  { name: "Jan", visitors: 400 },
  { name: "Feb", visitors: 300 },
  { name: "Mar", visitors: 500 },
  { name: "Apr", visitors: 280 },
  { name: "May", visitors: 590 },
  { name: "Jun", visitors: 320 },
  { name: "Jul", visitors: 350 }
];

const visitorLocations = [
  { country: "USA", count: 45 },
  { country: "UK", count: 20 },
  { country: "Canada", count: 15 },
  { country: "Germany", count: 10 },
  { country: "Other", count: 10 }
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "#9b87f5"
  }
};

const AnalyticsWidget = () => {
  return (
    <section className="py-6">
      <Card>
        <CardHeader>
          <CardTitle>Website Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Visitor Chart */}
            <div>
              <h3 className="font-medium mb-2">Visitor Activity</h3>
              <div className="h-[200px] w-full">
                <ChartContainer config={chartConfig}>
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="#9b87f5"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </div>
            
            {/* Visitor Locations */}
            <div>
              <h3 className="font-medium mb-2">Visitor Locations</h3>
              <div className="grid grid-cols-2 gap-2">
                {visitorLocations.map((location) => (
                  <div key={location.country} className="flex justify-between p-2 border rounded">
                    <span>{location.country}</span>
                    <span className="font-medium">{location.count}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Total Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border rounded text-center">
                <div className="text-3xl font-bold">1.2k</div>
                <div className="text-sm text-muted-foreground">Monthly Visitors</div>
              </div>
              <div className="p-4 border rounded text-center">
                <div className="text-3xl font-bold">45s</div>
                <div className="text-sm text-muted-foreground">Avg. Time on Site</div>
              </div>
              <div className="p-4 border rounded text-center">
                <div className="text-3xl font-bold">24%</div>
                <div className="text-sm text-muted-foreground">Return Rate</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AnalyticsWidget;
