import Links from './Links'
import Logo from './Logo'

const Sidebar = () => {
	return (
		<aside className="fixed inset-y-0 left-0 z-10 w-64 p-6 flex-col bg-background hidden lg:flex">
			<div className="flex h-16 shrink-0 items-center px-6">
				<h1>
					<Logo />
				</h1>
			</div>
			<div className="flex flex-1 flex-col overflow-y-auto pt-6">
				<nav className="flex flex-col space-y-4 mt-4">
					<Links />
				</nav>
			</div>
		</aside>
	)
}

export default Sidebar
