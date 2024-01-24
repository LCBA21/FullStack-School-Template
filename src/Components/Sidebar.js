
import React,{useState, useEffect} from 'react'
import { FaSchool, FaGridAlt, FaQuotation, FaComments, FaChevronRight, FaAddressBook, FaUsers } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5'


function Sidebar() {
  const [userRole, setUserRole] = useState();
  
  return (
    <>
    <div className="sidebar-wrapper" >
      <div className="logo">
          <i className="fa-solid fa-school"></i> 
          <a href="http://localhost:5173">Sebitja<span>Secondary</span></a>
      </div>
      <div className="sidebar_links">
          <span className='links-subtitle'>Main page</span>
          <a href=""><IoGrid />Dashboard</a> 
          <a href="">About</a>
          <a href=""><i className="lni lni-comments"></i>Blog<i  className="lni lni-chevron-right"></i></a>
          <div className="blog-links">
            <a href="">Create blog</a>
            <a href="">Blog posts</a>
          </div>
          <a href=""><FaAddressBook />Contact</a>
          <a href=""><FaUsers />User</a>
      </div>
    </div>
    </>
  )
}

export default Sidebar