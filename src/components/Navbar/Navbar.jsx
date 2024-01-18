import NavbarBtn from './NavbarBtn'

const Navbar = () => {
  return (
    <nav className="320px-639px:flex-col 320px-639px:h-[20rem] flex justify-center h-[6.25rem]">
      <NavbarBtn to="/" name="Main" end={true} />
      <NavbarBtn to="/random" name="Random" />
      <NavbarBtn to="/customized" name="Custom" />
    </nav>
  )
}

export default Navbar
