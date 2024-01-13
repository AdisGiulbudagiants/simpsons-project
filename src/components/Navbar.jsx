import NavbarBtn from './NavbarBtn'

const Navbar = () => {
  return (
    <nav className="flex justify-center h-[6.25rem]">
      <NavbarBtn to="/" name="Main" end={true} />
      <NavbarBtn to="/random" name="Random" />
      <NavbarBtn to="/customized" name="Custom" />
    </nav>
  )
}

export default Navbar
