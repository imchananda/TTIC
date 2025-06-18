import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react'; // หรือใช้ svg เองถ้าไม่ได้ใช้ Lucide

// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'


// const Navbar = () => {

//     const navigate = useNavigate();

//   return (
//     <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
//         <img onClick={()=>navigate('/')} src={assets.logo_otp} alt="logo" className='w-32 sm:w-44 cursor-pointer'/>
//         <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Login
//             <img src={assets.arrow} className='w-3' alt="arrow" />
//         </button>
//     </div>
//   )
// }

// export default Navbar


const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'หน้าแรก', path: '/' },
    { label: 'เกี่ยวกับเรา', path: '/About' },
    { label: 'โครงสร้าง ศทท.', path: '/Structure' },
    { label: 'วิสัยทัศน์และพันธกิจ', path: '/Vision' },
    { label: 'บริการของ ศทท.', path: '/Services' },
    { label: 'ข่าวสารไอที', path: '/Itnews' },
    { label: 'ติดต่อเรา', path: '/Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 ">
      <div className="flex justify-between items-center py-5 px-6 sm:px-20 xl:px-32 ">
        
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo_otp} alt="logo" className="w-32 sm:w-44 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`relative transition-all duration-300 
                ${isActive(item.path)
                  ? 'text-primary font-semibold underline underline-offset-8 decoration-[#5044E5]'
                  : 'text-gray-600 hover:underline hover:decoration-[#5044E5] underline-offset-4'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <Link
          to="/admin"
          className="hidden md:flex items-center gap-2 rounded-full text-sm bg-primary text-white px-6 py-2.5 hover:bg-primary/90 transition"
        >
          Login
          <img src={assets.arrow} className="w-3" alt="arrow" />
        </Link>

        {/* Hamburger Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow-sm border-t border-gray-100">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-sm transition-all duration-300
                ${isActive(item.path)
                  ? 'text-primary font-semibold underline underline-offset-8 decoration-[#5044E5]'
                  : 'text-gray-700 hover:underline hover:decoration-[#5044E5] underline-offset-4'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="block mt-3 w-full text-center rounded-full text-sm bg-primary text-white px-6 py-2.5 hover:bg-primary/90 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;