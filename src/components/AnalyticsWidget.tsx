import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

const AnalyticsWidget = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [visitorLocations, setVisitorLocations] = useState([]);
  const [monthlyVisitors, setMonthlyVisitors] = useState(0);
  const [currentVisitors, setCurrentVisitors] = useState(0);

  // Fetch analytics data from the backend
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/analytics");
        const data = await response.json();
        setAnalyticsData(data.visitorActivity);
        setVisitorLocations(data.visitorLocations);
        setMonthlyVisitors(data.monthlyVisitors);
        setCurrentVisitors(data.currentVisitors || 0);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      }
    };

    fetchAnalytics();
  }, []);

  // Record user clicks
  const handleClick = async (element) => {
    try {
      await fetch("http://localhost:5000/api/analytics/clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ element }),
      });
    } catch (error) {
      console.error("Error recording click:", error);
    }
  };

  return (
    <section className="py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <Card className="bg-secondary/50 border-primary/20">
          <CardHeader className="bg-background/50 rounded-t-lg border-b border-border pb-4 mb-5">
            <CardTitle className="text-foreground">Website Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Visitor Chart */}
              <div>
                <h3 className="font-medium mb-2 text-foreground">Visitor Activity</h3>
                <div className="w-full" style={{ height: "240px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={analyticsData}
                      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#f9fafb", borderColor: "#d1d5db" }}
                        itemStyle={{ color: "#374151" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="#2563eb"
                        activeDot={{ r: 8 }}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Visitor Locations */}
              <div>
                <h3 className="font-medium mb-2 text-foreground">Visitor Locations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {visitorLocations.map((location) => (
                    <div
                      key={location.country}
                      className="flex justify-between p-2 border rounded bg-background hover:bg-gray-100 transition-colors"
                    >
                      <span>{location.country}</span>
                      <span className="font-medium">{location.count}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Visitors and Monthly Visitors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Monthly Visitors */}
                <div
                  className="p-4 border rounded text-center bg-background hover:bg-gray-100 transition-colors"
                  onClick={() => handleClick("Monthly Visitors")}
                >
                  <div className="text-3xl font-bold text-blue-600">{monthlyVisitors}</div>
                  <div className="text-sm text-muted-foreground">Monthly Visitors</div>
                </div>

                {/* Current Visitors */}
                <div
                  className="p-4 border rounded text-center bg-background hover:bg-gray-100 transition-colors"
                  onClick={() => handleClick("Current Visitors")}
                >
                  <div className="text-3xl font-bold text-green-600">{currentVisitors}</div>
                  <div className="text-sm text-muted-foreground">Current Visitors</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnalyticsWidget;