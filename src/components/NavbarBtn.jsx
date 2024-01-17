import { NavLink } from 'react-router-dom'

const NavbarBtn = ({ to, end = false, name }) => {
  return (
    <button className=" 320px-639px:mb-[1.5rem]">
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          isActive
            ? ' p-[0.75rem] mr-5 active:text-[2.25rem] shadow-btnShadow shadow-white bg-yellow rounded-md border text-black font-caveat font-semibold text-[2.5rem]'
            : 'p-[0.75rem] mr-5 active:text-[2.25rem] transition easy-in-out duration-[0.35s] hover:bg-white bg-white bg-opacity-30 rounded-md border text-black font-caveat font-semibold text-[2.5rem]'
        }
      >
        {name}
      </NavLink>
    </button>
  )
}

export default NavbarBtn
