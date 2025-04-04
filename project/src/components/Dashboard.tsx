import React from 'react';
import { Car, AlertTriangle, Users, Activity } from 'lucide-react';

function StatCard({ icon: Icon, title, value, change }: { icon: React.ElementType, title: string, value: string, change: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-green-500">{change}</p>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={Car}
          title="Active Vehicles"
          value="1,234"
          change="+12% from last month"
        />
        <StatCard 
          icon={AlertTriangle}
          title="Incidents Today"
          value="23"
          change="-5% from yesterday"
        />
        <StatCard 
          icon={Users}
          title="Total Users"
          value="5,678"
          change="+3% from last week"
        />
        <StatCard 
          icon={Activity}
          title="System Health"
          value="98%"
          change="Optimal performance"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Incidents</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 border-b pb-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-medium">Speed Violation</h3>
                  <p className="text-sm text-gray-500">Vehicle ID: ABC123</p>
                </div>
                <div className="ml-auto text-sm text-gray-500">
                  2 hours ago
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">System Analytics</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;