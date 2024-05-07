import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border border-[#0000000e] dark:border-[#ffffff1e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://tkmce.ac.in/about-tkm-enggineering-college"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="https://tkmce.ac.in/disclosure"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Disclosure
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://www.tkmce.ac.in/hostel.php"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Hostels
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/course-dashboard"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Hostel Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Social Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCw3LnCjC-4ulpQXAB-D72fA/videos?view=0&sort=dd&shelf_id=0"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/tkmce_official/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600] text-black dark:text-white pb-3">Contact Info</h3>
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
            Call Us: +91 474-2712024 
            </p>
           
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
            Address: TKM College of Engineering, Kariode, Kollam, 691005
            </p>
         
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white  pb-2">
            Mail Us: tkmcehostels@gmail.com
            </p>
            
          </div>
        </div>
        <br />
        <p className="text-center text-black dark:text-white">
          Copyright © 2023 TKM College of Engineering | All Rights Reserved
        </p>
      </div>
      <br />
    </footer>
  )
}

export default Footer;
