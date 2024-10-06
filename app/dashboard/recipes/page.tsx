import SearchBar from '@/components/ui/SearchBar'
import Create from '@/features/recipes/components/Create'
import { Suspense } from 'react'
import RecipesContainer from '@/features/recipes/components/RecipesContainer'

const page = async () => {
	return (
		<div className="px-2 grid grid-cols-[56px_1fr] gap-2">
			<Create />
			<SearchBar />
			<div className='col-span-2'>
				<Suspense fallback={'....'}>
					<RecipesContainer />
				</Suspense>
			</div>
		</div>
	)
}

export default page
