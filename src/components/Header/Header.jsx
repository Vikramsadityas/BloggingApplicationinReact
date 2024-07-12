import React,{useState,useId} from 'react'
import {Container, LogoutBtn} from '../index'
import {useSelector} from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {AcmeLogo} from "../../AcmeLogo.jsx";

//css library header
function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='py-3 shadow bg-gray-400 text-black w-screen max-sm:w-auto'>
      <Container>
        <Navbar className='flex justify-center items-center' onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
              <NavbarBrand className='mr-4 w-[85%] cursor-pointer'>
                <Link to="/">
                  <AcmeLogo />
                  <p className="font-bold text-inherit ">ACME</p>
                </Link>
              </NavbarBrand>
            </NavbarContent>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <ul className='flex ml-auto max-sm:hidden'>
            {navItems.map((item,index) => 
            item.active ? (
              <NavbarItem>
              <li key={index}
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-gray-600 hover:text-white rounded-full cursor-pointer'
                >{item.name}
              </li>
              </NavbarItem>
            ) : null
          )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          </NavbarContent>
            <NavbarMenu>
            {navItems.map((item,index) => 
            item.active ? (
              <NavbarMenuItem key={`${item}-${index}`}>
                <NavbarItem>
              <li key={index}
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-gray-600 rounded-full'
                >{item.name}
              </li>
              </NavbarItem>
              </NavbarMenuItem>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            </NavbarMenu>
        </Navbar>
        </Container>
    </header>
  )
}

export default Header

{/* <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar> */}