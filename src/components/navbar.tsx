import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="text-emerald-600 bg-[#14460d]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-[#9fe6a9]">
    <Link href="/" className="flex title-font font-medium items-center  text-white mb-4 md:mb-0">
    
      <span className="ml-3 text-xl">The Bloggers do BLOGS Daily here....!! </span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/#" className="mr-5 hover:text-gray-900">Authors</Link>
      <Link href="/Blog" className="mr-5 hover:text-gray-900">Blogs</Link>
      <Link href="/About" className="mr-5 hover:text-gray-900">About Us</Link>
      <Link href="/Contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
    </nav>

  </div>
</header>

    </div>
  )
}

export default Navbar