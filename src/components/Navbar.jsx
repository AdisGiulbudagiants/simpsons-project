import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-yellow">
      <button>
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive
              ? 'p-[20px] flex items-center bg-white border'
              : 'p-[20px] flex items-center bg-red border'
          }
        >
          Home
        </NavLink>
      </button>
      <button>
        <NavLink
          to="random"
          className={({ isActive }) =>
            isActive
              ? 'p-[20px] flex items-center bg-white border'
              : 'p-[20px] flex items-center bg-red border'
          }
        >
          Random
        </NavLink>
      </button>
      <button>
        <NavLink
          to="customized"
          className={({ isActive }) =>
            isActive
              ? 'p-[20px] flex items-center bg-white border'
              : 'p-[20px] flex items-center bg-red border'
          }
        >
          Customized
        </NavLink>
      </button>
    </nav>
  )
}

export default Navbar
