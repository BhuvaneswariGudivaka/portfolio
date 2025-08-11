import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { l: 'Home', id: 'home' },
    { l: 'About', id: 'about' },
    { l: 'Education', id: 'education' },
    { l: 'Projects', id: 'projects' },
    { l: 'Experience', id: 'experience' },
    { l: 'Certifications', id: 'certifications' },
    { l: 'Technical Skills', id: 'skills' }, // ✅ Added Technical Skills
    { l: 'Contact', id: 'contact' }
  ];

  return (
    <nav className='fixed w-full z-50 bg-gradient-to-r from-black via-slate-900 to-black shadow'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        
        {/* Logo */}
        <Link to='home' smooth={true} duration={400}>
          <h1 className='text-cyan-400 text-2xl font-bold cursor-pointer'>BG.</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-white'>
          {items.map(it => (
            <li key={it.id} className='hover:text-cyan-400 cursor-pointer'>
              <Link to={it.id} smooth={true} duration={400}>
                {it.l}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white text-2xl focus:outline-none'
          onClick={() => setOpen(!open)}
        >
          {open ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden bg-slate-900 text-white p-6'>
          {items.map(it => (
            <div
              key={it.id}
              className='py-2 hover:text-cyan-400 cursor-pointer'
            >
              <Link
                to={it.id}
                smooth={true}
                duration={400}
                onClick={() => setOpen(false)}
              >
                {it.l}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
