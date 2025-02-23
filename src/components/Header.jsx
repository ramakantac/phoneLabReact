import {useState} from "react";
import { FiMenu, FiBell, FiRefreshCw, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { FaBox, FaShoppingCart, FaClipboardList, FaStore, FaAddressBook, FaTools, FaUsers, FaWarehouse, FaMoneyBillWave, FaFileInvoiceDollar, FaChartLine, FaCogs } from 'react-icons/fa';
import { RiDashboardLine } from 'react-icons/ri';

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

export default Header;