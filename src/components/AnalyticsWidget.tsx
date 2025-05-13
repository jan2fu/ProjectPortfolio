import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

const AnalyticsWidget = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [visitorLocations, setVisitorLocations] = useState([]);
  const [monthlyVisitors, setMonthlyVisitors] = useState(0);

  // Fetch analytics data from the backend
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/analytics");
        const data = await response.json();
        setAnalyticsData(data.visitorActivity);
        setVisitorLocations(data.visitorLocations);
        setMonthlyVisitors(data.monthlyVisitors);
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
      <Card className="bg-gray-800 text-white border-gray-700 hover:shadow-lg transition-shadow">
        <CardHeader className="bg-gray-900 rounded-t-lg border-b border-gray-700">
          <CardTitle className="text-white">Website Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Visitor Chart */}
            <div>
              <h3 className="font-medium mb-2 text-gray-300">Visitor Activity</h3>
              <div className="w-full" style={{ height: "240px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={analyticsData}
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                    <XAxis dataKey="name" stroke="#cbd5e0" />
                    <YAxis stroke="#cbd5e0" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#2d3748", borderColor: "#4a5568" }}
                      itemStyle={{ color: "#e2e8f0" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="#63b3ed"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Visitor Locations */}
            <div>
              <h3 className="font-medium mb-2 text-gray-300">Visitor Locations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {visitorLocations.map((location) => (
                  <div
                    key={location.country}
                    className="flex justify-between p-2 border rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    <span>{location.country}</span>
                    <span className="font-medium">{location.count}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className="p-4 border rounded text-center bg-gray-700 hover:bg-gray-600 transition-colors"
                onClick={() => handleClick("Monthly Visitors")}
              >
                <div className="text-3xl font-bold text-blue-400">{monthlyVisitors}</div>
                <div className="text-sm text-gray-400">Monthly Visitors</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AnalyticsWidget;