'use client'

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const pathName = usePathname();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement your search logic here
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <div className="relative flex-grow">
        <Input
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-4 pr-10 py-2 rounded border-2 border-gray-300 focus:outline-none focus:ring focus:border-orange-base focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded w-8 h-8 bg-orange-base hover:bg-orange-base"
        >
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </form>
  )
}

export default SearchBar