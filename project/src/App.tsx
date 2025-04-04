import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Car, 
  AlertTriangle, 
  Users, 
  Settings,
  LogOut,
  Receipt
} from 'lucide-react';

// Components
import Dashboard from './components/Dashboard';
import VehicleMonitoring from './components/VehicleMonitoring';
import Incidents from './components/Incidents';
import UserManagement from './components/UserManagement';
import SettingsComponent from './components/Settings';
import ChallanSystem from './components/ChallanSystem';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="flex items-center gap-2 text-white mb-8">
        <Car className="h-8 w-8" />
        <span className="text-xl font-bold">Traffic Management</span>
      </div>
      
      <nav className="space-y-2">
        <Link to="/" className="flex items-center gap-2 text-gray-300 hover:bg-gray-800 p-2 rounded-lg">
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </Link>
        <Link to="/monitoring" className="flex items-center gap-2 text-gray-300 hover:bg-gray-800 p-2 rounded-lg">
          <Car className="h-5 w-5" />
          Vehicle Monitoring
        </Link>
        <Link to="/incidents" className="flex items-center gap-2 text-gray-300 hover:bg-gray-800 p-2 rounded-lg">
          <AlertTriangle className="h-5 w-5" />
          Incidents
        </Link>
        <Link to="/challans" className="flex items-center gap-2 text-gray-300 hover:bg-gray-800 p-2 rounded-lg">
          <Receipt className="h-5 w-5" />
          Challans
        </Link>
        <Link to="/users" className="flex items-center gap-2 text-gray-300 hover:bg-gray-800 p-2 rounded-lg">
          <Users className="h-5 w-5" />
          User Management
        </Link>
        <Link to="/settings" className="flex items-center gap-2 text-gray-300 hover:bg-gray-800 p-2 rounded-lg">
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button className="flex items-center gap-2 text-gray-300 hover:bg-gray-800 p-2 rounded-lg w-full">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/monitoring" element={<VehicleMonitoring />} />
            <Route path="/incidents" element={<Incidents />} />
            <Route path="/challans" element={<ChallanSystem />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/settings" element={<SettingsComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;