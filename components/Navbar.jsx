'use client'
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/all-products' },
    // { name: 'About Us', href: '/about-us' },
  ]

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />

      {/* Center Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium transition-colors ${pathname === link.href
              ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
              : 'text-gray-700 hover:text-blue-600'
              }`}
          >
            {link.name}
          </Link>
        ))}

        {
          isSeller && <button
            onClick={() => router.push('/seller')}
            className="text-xs border px-4 py-1.5 rounded-full hover:shadow-lg cursor-pointer">
            Admin Dashboard</button>
        }
        {/* <Link
          href="/dashboard"
          className="border border-gray-400 px-4 py-1.5 rounded-full text-sm hover:bg-gray-100 transition"
        >
          Seller Dashboard
        </Link> */}
      </div>

      <ul className="hidden md:flex items-center gap-4 ">

        {user ? <>
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={() => router.push('/')} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label="products" labelIcon={<BoxIcon />} onClick={() => router.push('/all-products')} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push('/cart')} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')} />
            </UserButton.MenuItems>
          </UserButton>
        </> : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer hover:bg-gray-300 p-2 rounded">
          {/* <Image src={assets.user_icon} alt="user icon" /> */}
          Account
        </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full cursor-pointer hover:shadow-lg ">Admin Dashboard</button>}
        {
          user ? <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push('/cart')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')} />
              </UserButton.MenuItems>
            </UserButton>
          </> : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;