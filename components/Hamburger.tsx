'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import Links from './Links'

const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="lg:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-hull" aria-describedby={undefined}>
				<SheetTitle>
					
				</SheetTitle>
				<nav className="flex flex-col space-y-4 mt-4">
					<Links props={{setIsOpen}} />
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default Hamburger
