import {useState} from "react";
import { FiMenu, FiBell, FiRefreshCw, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { FaBox, FaShoppingCart, FaClipboardList, FaStore, FaAddressBook, FaTools, FaUsers, FaWarehouse, FaMoneyBillWave, FaFileInvoiceDollar, FaChartLine, FaCogs } from 'react-icons/fa';
import { RiDashboardLine } from 'react-icons/ri';

function SideBar({ isOpen, toggleSidebar }) {
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

export default SideBar;