import { Navbar, Nav } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/reducers/darkModeSlice";

function NavigationBar() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Navbar
      fixed='top'
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand='lg'
      className='navbar px-3'
    >
      <Navbar.Toggle aria-controls='navbar-content' />
      <Navbar.Collapse id='navbar-content' className='justify-content-between'>
        <Navbar.Brand>Markdown Previewer</Navbar.Brand>
        <Nav>
          <Nav.Link href='#' onClick={handleToggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
