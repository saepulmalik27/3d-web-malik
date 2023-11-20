import { NavLink } from 'react-router-dom';

const navbarList = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
];

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to={'/'}
        className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-100'
      >
        <img src='/assets/logo.png' className='rounded-full shadow-md' />
      </NavLink>
      <nav className='flex gap-7 text-lg font-medium'>
        {navbarList.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
