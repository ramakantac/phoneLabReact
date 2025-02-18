import { useState } from 'react'
import { FiMenu, FiBell, FiRefreshCw, FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { 
  FaBox, 
  FaShoppingCart, 
  FaClipboardList, 
  FaStore,
  FaAddressBook
} from 'react-icons/fa'
import { RiDashboardLine } from 'react-icons/ri'

function Sidebar({ isOpen }) {
  const [activeMenu, setActiveMenu] = useState('products')
  const [expandedMenus, setExpandedMenus] = useState(['products'])

  const toggleMenu = (menuName) => {
    if (expandedMenus.includes(menuName)) {
      setExpandedMenus(expandedMenus.filter(name => name !== menuName))
    } else {
      setExpandedMenus([...expandedMenus, menuName])
    }
    setActiveMenu(menuName)
  }

  const isMenuExpanded = (menuName) => expandedMenus.includes(menuName)

  return (
    <div className={`fixed left-0 top-16 h-full bg-sidebar-blue w-64 border-r transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="py-4">
        <div className="sidebar-item">
          <RiDashboardLine className="mr-3" />
          <span className="flex-1">Dashboard</span>
        </div>
        
        <div 
          className={`sidebar-item ${activeMenu === 'products' ? 'active' : ''}`}
          onClick={() => toggleMenu('products')}
        >
          <FaBox className="mr-3" />
          <span className="flex-1">Products</span>
          {isMenuExpanded('products') ? (
            <FiChevronDown className="ml-2" />
          ) : (
            <FiChevronRight className="ml-2" />
          )}
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

        <div className="sidebar-item">
          <FaShoppingCart className="mr-3" />
          <span className="flex-1">Purchases</span>
          <FiChevronRight className="ml-2" />
        </div>

        <div className="sidebar-item">
          <FaClipboardList className="mr-3" />
          <span className="flex-1">Custom Orders</span>
          <FiChevronRight className="ml-2" />
        </div>

        <div className="sidebar-item">
          <FaStore className="mr-3" />
          <span className="flex-1">Sell</span>
          <FiChevronRight className="ml-2" />
        </div>

        <div className="sidebar-item">
          <FaAddressBook className="mr-3" />
          <span className="flex-1">Contacts</span>
          <FiChevronRight className="ml-2" />
        </div>
      </div>
    </div>
  )
}

function Header({ toggleSidebar }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b px-4 flex items-center justify-between">
      <div className="flex items-center">
      <img src="https://dstemp.teq2web.com/images/Logo.png" alt="PhoneLab" className="h-8 ml-1" />
        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg ml-2">
          <FiMenu className="text-xl" />
        </button>
       
      </div>
      
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <FiBell className="text-xl text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <FiRefreshCw className="text-xl text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://dstemp.teq2web.com/images/Logo.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Admin</span>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      <main className={`pt-16 ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        <div className="p-6">
          {/* Main content will go here */}
        </div>
      </main>
    </div>
  )
}

export default Dashboard