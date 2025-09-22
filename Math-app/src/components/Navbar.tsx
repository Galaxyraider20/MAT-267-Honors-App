import {
	Avatar,
	Dropdown,
	DropdownDivider,
	DropdownHeader,
	DropdownItem,
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import favicon from "/school/Semester 1/MAT 267/honors project/MAT-267-Honors-App/Math-app/public/calcify-logo-icon.svg";
export default function NavbarWithDropdown() {
	return (
		<Navbar fluid rounded>
			<NavbarBrand href="https://flowbite-react.com">
				<img
					src={favicon}
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite React Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Calcify
				</span>
			</NavbarBrand>
			<div className="flex md:order-2">
				<Dropdown
					arrowIcon={false}
					inline
					label={
						<Avatar
							alt="User settings"
							img="/icons8-user-default-64.png"
							rounded
						/>
					}
				>
					<DropdownHeader>
						<span className="block text-sm">Bonnie Green</span>
						<span className="block truncate text-sm font-medium">
							name@flowbite.com
						</span>
					</DropdownHeader>
					<DropdownItem>Dashboard</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Earnings</DropdownItem>
					<DropdownDivider />
					<DropdownItem>Sign out</DropdownItem>
				</Dropdown>
				<NavbarToggle />
			</div>
			<NavbarCollapse>
				<NavbarLink href="#" active>
					Home
				</NavbarLink>
				<NavbarLink href="#">About</NavbarLink>
				<NavbarLink href="#">Services</NavbarLink>
				<NavbarLink href="#">Pricing</NavbarLink>
				<NavbarLink href="#">Contact</NavbarLink>
			</NavbarCollapse>
		</Navbar>
	);
}
