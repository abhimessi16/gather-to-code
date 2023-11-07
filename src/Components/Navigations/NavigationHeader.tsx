
import { Link, Navbar, NavbarBrand, NavbarItem } from "@nextui-org/react"

const NavigationHeader = () => {

  const Github = import.meta.env.VITE_GITHUB_LINK
  const LinkedIn = import.meta.env.VITE_LINKEDIN_LINK

  return (
      <Navbar maxWidth="lg" className="flex flex-col justify-between items-center border-b-1">
          <NavbarBrand>
              <h2 className="text-2xl">
                Gather To Code
                {/* Logo will come up here! */}
              </h2>
          </NavbarBrand>
          <NavbarItem>
              <Link href={Github} aria-label="Github" target="_blank"
                className="m-2 p-2 bg-default-50 border-1 border-home rounded-full cursor-pointer hover:bg-default-200 action:bg-default-300">
                  <img src="/github.svg" alt="Github" />
              </Link>
          </NavbarItem>
          <NavbarItem>
              <Link href={LinkedIn} aria-label="LinkedIn" target="_blank"
                className="m-2 p-2 bg-default-50 border-1 border-home rounded-full cursor-pointer hover:bg-default-200 action:bg-default-300">
                  <img src="/linkedin.svg" alt="Github" />
                </Link>
          </NavbarItem>
      </Navbar>
  )
}

export default NavigationHeader