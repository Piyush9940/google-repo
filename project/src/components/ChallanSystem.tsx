import React, { useState } from 'react';
import { AlertCircle, Send, Download, Filter } from 'lucide-react';
import { format } from 'date-fns';

interface Challan {
  id: string;
  vehicleId: string;
  violation: string;
  location: string;
  timestamp: Date;
  amount: number;
  status: 'pending' | 'paid' | 'disputed';
}

const mockChallans: Challan[] = [
  {
    id: 'CH001',
    vehicleId: 'KA01AB1234',
    violation: 'Overspeeding (80km/h in 50km/h zone)',
    location: 'MG Road',
    timestamp: new Date('2024-02-20T10:30:00'),
    amount: 1000,
    status: 'pending'
  },
  {
    id: 'CH002',
    vehicleId: 'KA02CD5678',
    violation: 'Red Light Violation',
    location: 'Brigade Road',
    timestamp: new Date('2024-02-19T15:45:00'),
    amount: 500,
    status: 'paid'
  },
  {
    id: 'CH003',
    vehicleId: 'KA03EF9012',
    violation: 'Dangerous Driving',
    location: 'Outer Ring Road',
    timestamp: new Date('2024-02-18T09:15:00'),
    amount: 2000,
    status: 'disputed'
  }
];

function ChallanSystem() {
  const [challans] = useState<Challan[]>(mockChallans);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredChallans = selectedStatus === 'all' 
    ? challans 
    : challans.filter(challan => challan.status === selectedStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'paid':
        return 'bg-green-100 text-green-600';
      case 'disputed':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const sendNotification = (challan: Challan) => {
    // Implement notification logic here
    console.log(`Sending notification for challan ${challan.id}`);
  };

  const downloadChallan = (challan: Challan) => {
    // Implement download logic here
    console.log(`Downloading challan ${challan.id}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Automated Challan System</h1>
        <div className="flex gap-4">
          <select 
            className="border rounded-lg px-4 py-2"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="disputed">Disputed</option>
          </select>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
            <Filter className="h-5 w-5" />
            Advanced Filters
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Challans</h3>
            <p className="text-3xl font-bold text-blue-600">{challans.length}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Amount Collected</h3>
            <p className="text-3xl font-bold text-green-600">
              ₹{challans.reduce((sum, challan) => 
                challan.status === 'paid' ? sum + challan.amount : sum, 0
              )}
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Pending Amount</h3>
            <p className="text-3xl font-bold text-yellow-600">
              ₹{challans.reduce((sum, challan) => 
                challan.status === 'pending' ? sum + challan.amount : sum, 0
              )}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Challan ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Violation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredChallans.map((challan) => (
                <tr key={challan.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {challan.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {challan.vehicleId}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      {challan.violation}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {challan.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {format(challan.timestamp, 'PPp')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ₹{challan.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`${getStatusColor(challan.status)} px-2 py-1 rounded-full text-xs`}>
                      {challan.status.charAt(0).toUpperCase() + challan.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => sendNotification(challan)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Send Notification"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => downloadChallan(challan)}
                        className="text-green-600 hover:text-green-800"
                        title="Download Challan"
                      >
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ChallanSystem;