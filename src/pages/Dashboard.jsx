import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/SideBar.jsx';
import store from "../useStore.js";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const setAuthenticated = store((state) => state.setAuthenticated);


  useEffect(() => {
      setAuthenticated(true);
      console.log("Dashboard");
    const handleResize = () => setSidebarOpen(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
        <div className="p-6">
          {/* Main content will go here */}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
