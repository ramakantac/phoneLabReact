import { useState, useEffect } from 'react';
import { FiMenu, FiBell, FiRefreshCw, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { FaBox, FaShoppingCart, FaClipboardList, FaStore, FaAddressBook, FaTools, FaUsers, FaWarehouse, FaMoneyBillWave, FaFileInvoiceDollar, FaChartLine, FaCogs } from 'react-icons/fa';
import { RiDashboardLine } from 'react-icons/ri';

function Sidebar({ isOpen, toggleSidebar }) {
  const [activeMenu, setActiveMenu] = useState('products');
  const [expandedMenus, setExpandedMenus] = useState(['products']);

  const toggleMenu = (menuName) => {
    if (expandedMenus.includes(menuName)) {
      setExpandedMenus(expandedMenus.filter(name => name !== menuName));
    } else {
      setExpandedMenus([...expandedMenus, menuName]);
    }
    setActiveMenu(menuName);
  };

  const isMenuExpanded = (menuName) => expandedMenus.includes(menuName);

  return (
    <div className={`fixed left-0 top-16 h-full bg-sidebar-blue w-64 border-r transition-all duration-300 overflow-y-auto z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64`}>
      <div className="py-4">
        <div className="sidebar-item" onClick={toggleSidebar}>
          <RiDashboardLine className="mr-3" />
          <span className="flex-1">Dashboard</span>
        </div>

        <div className={`sidebar-item ${activeMenu === 'products' ? 'active' : ''}`} onClick={() => toggleMenu('products')}>
          <FaBox className="mr-3" />
          <span className="flex-1">Products</span>
          {isMenuExpanded('products') ? <FiChevronDown className="ml-2" /> : <FiChevronRight className="ml-2" />}
        </div>
        {isMenuExpanded('products') && (
          <div className="bg-white">
            <div className="sidebar-subitem">List Products</div>
            <div className="sidebar-subitem">Add Product</div>
            <div className="sidebar-subitem">Print Labels</div>
            <div className="sidebar-subitem">Variations</div>
            <div className="sidebar-subitem">Import Products</div>
            <div className="sidebar-subitem">Selling Price Group</div>
            <div className="sidebar-subitem">Units</div>
            <div className="sidebar-subitem">Categories</div>
            <div className="sidebar-subitem">Brands</div>
            <div className="sidebar-subitem">Warranties</div>
            <div className="sidebar-subitem">Manage AMC</div>
          </div>
        )}

        <div className={`sidebar-item ${activeMenu === 'purchases' ? 'active' : ''}`} onClick={() => toggleMenu('purchases')}>
          <FaShoppingCart className="mr-3" />
          <span className="flex-1">Purchases</span>
          {isMenuExpanded('purchases') ? <FiChevronDown className="ml-2" /> : <FiChevronRight className="ml-2" />}
        </div>
        {isMenuExpanded('purchases') && (
          <div className="bg-white">
            <div className="sidebar-subitem">List Purchases</div>
            <div className="sidebar-subitem">Add Purchase</div>
            <div className="sidebar-subitem">Import Purchase</div>
            <div className="sidebar-subitem">Purchase Returns</div>
          </div>
        )}

        <div className={`sidebar-item ${activeMenu === 'custom-orders' ? 'active' : ''}`} onClick={() => toggleMenu('custom-orders')}>
          <FaClipboardList className="mr-3" />
          <span className="flex-1">Custom Orders</span>
          {isMenuExpanded('custom-orders') ? <FiChevronDown className="ml-2" /> : <FiChevronRight className="ml-2" />}
        </div>
        {isMenuExpanded('custom-orders') && (
          <div className="bg-white">
            <div className="sidebar-subitem">Orders List</div>
            <div className="sidebar-subitem">Add Order</div>
            <div className="sidebar-subitem">Manage Status</div>
          </div>
        )}

        <div className={`sidebar-item ${activeMenu === 'sell' ? 'active' : ''}`} onClick={() => toggleMenu('sell')}>
          <FaShoppingCart className="mr-3" />
          <span className="flex-1">Sell</span>
          {isMenuExpanded('sell') ? <FiChevronDown className="ml-2" /> : <FiChevronRight className="ml-2" />}
        </div>
        {isMenuExpanded('sell') && (
          <div className="bg-white">
            <div className="sidebar-subitem">All Sales</div>
            <div className="sidebar-subitem">POS Sales</div>
            <div className="sidebar-subitem">Add Quotation</div>
            <div className="sidebar-subitem">List quotations</div>
            <div className="sidebar-subitem">AMC Sales</div>
            <div className="sidebar-subitem">Sell Return</div>
            <div className="sidebar-subitem">Coupons</div>
            <div className="sidebar-subitem">Subscriptions</div>
            <div className="sidebar-subitem">AMC Sales</div>
          </div>
        )}

        <div className="sidebar-item"><FaAddressBook className="mr-3" /><span>Contacts</span></div>
        <div className="sidebar-item"><FaTools className="mr-3" /><span>Manage Repair</span></div>
        <div className="sidebar-item"><FaUsers className="mr-3" /><span>Manage Staff</span></div>
        <div className="sidebar-item"><FaWarehouse className="mr-3" /><span>Manage Stock</span></div>
        <div className="sidebar-item"><FaMoneyBillWave className="mr-3" /><span>Expenses</span></div>
        <div className="sidebar-item"><FaFileInvoiceDollar className="mr-3" /><span>Accounts</span></div>
        <div className="sidebar-item"><FaChartLine className="mr-3" /><span>Reports</span></div>
        <div className="sidebar-item"><FaUsers className="mr-3" /><span>HRM</span></div>

        <div className={`sidebar-item ${activeMenu === 'settings' ? 'active' : ''}`} onClick={() => toggleMenu('settings')}>
          <FaCogs className="mr-3" />
          <span className="flex-1">Settings</span>
          {isMenuExpanded('settings') ? <FiChevronDown className="ml-2" /> : <FiChevronRight className="ml-2" />}
        </div>
        {isMenuExpanded('settings') && (
          <div className="bg-white">
            <div className="sidebar-subitem">General Setting</div>
            <div className="sidebar-subitem">Branch</div>
            <div className="sidebar-subitem">Invoice Settings</div>
            <div className="sidebar-subitem">Barcode Settings</div>
            <div className="sidebar-subitem">Receipt Printers</div>
            <div className="sidebar-subitem">Tax Rates</div>
            <div className="sidebar-subitem">Package Subscription</div>
          </div>
        )}
      </div>
    </div>
  );
}

function Header({ toggleSidebar }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b px-4 flex items-center justify-between z-50">
      <div className="flex items-center">
        <img src="https://dstemp.teq2web.com/images/Logo.png" alt="PhoneLab" className="h-8 ml-1" />
        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg ml-2 md:hidden">
          <FiMenu className="text-xl" />
        </button>
      </div>
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <input type="text" placeholder="Search here..." className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full"><FiBell className="text-xl text-gray-600" /></button>
        <button className="p-2 hover:bg-gray-100 rounded-full"><FiRefreshCw className="text-xl text-gray-600" /></button>
        <div className="flex items-center gap-2">
          <img src="https://dstemp.teq2web.com/images/Logo.png" alt="Profile" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-medium">Admin</span>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
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
