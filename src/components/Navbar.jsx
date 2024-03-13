import { Navbar } from "flowbite-react";
import logo from "../assets/Logo.png";

function NavbarComponent() {
  return (
    <Navbar className="bg-transparent">
      <Navbar.Brand>
        <img src={logo} className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          WetaherSphere
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle className="text-white" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Humidity</Navbar.Link>
        <Navbar.Link href="#">Pressure</Navbar.Link>
        <Navbar.Link href="#">TempMax</Navbar.Link>
        <Navbar.Link href="#">TempMin</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
