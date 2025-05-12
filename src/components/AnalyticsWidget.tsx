
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-md transition-shadow">
        <CardHeader className="bg-purple-50 rounded-t-lg border-b border-purple-100">
          <CardTitle className="text-purple-800">Website Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Visitor Chart - Fixed height and proper containment */}
            <div>
              <h3 className="font-medium mb-2">Visitor Activity</h3>
              <div className="w-full" style={{ height: "240px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={analyticsData}
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-background p-2 border border-border rounded-md shadow-sm">
                              <p className="font-medium">{label}</p>
                              <p className="text-primary">{`Visitors: ${payload[0].value}`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="#9b87f5"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Visitor Locations */}
            <div>
              <h3 className="font-medium mb-2">Visitor Locations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {visitorLocations.map((location) => (
                  <div 
                    key={location.country} 
                    className="flex justify-between p-2 border rounded bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 hover:to-purple-50 transition-colors"
                  >
                    <span>{location.country}</span>
                    <span className="font-medium">{location.count}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Total Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 border rounded text-center bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="text-3xl font-bold text-blue-700">1.2k</div>
                <div className="text-sm text-muted-foreground">Monthly Visitors</div>
              </div>
              <div className="p-4 border rounded text-center bg-green-50 hover:bg-green-100 transition-colors">
                <div className="text-3xl font-bold text-green-700">45s</div>
                <div className="text-sm text-muted-foreground">Avg. Time on Site</div>
              </div>
              <div className="p-4 border rounded text-center bg-purple-50 hover:bg-purple-100 transition-colors">
                <div className="text-3xl font-bold text-purple-700">24%</div>
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
