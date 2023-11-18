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
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to={'/'}
        className='p- flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold'
      >
        <p className='blue-gradient_text'>SM</p>
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
