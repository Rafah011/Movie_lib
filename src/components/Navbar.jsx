import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav id='navbar'>
    <h2>
      <Link to="/">
        <BiCameraMovie />MoviesLib</Link>
    </h2>
    <form action="">
        <input type="text" placeholder='Search a movie' />
        <button type='submit'>
            <BiSearchAlt2/>
        </button>
    </form>
  </nav>
  )
}
export default Navbar;
