import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { Plus } from '../../../components/ui/icons'

const Create = () => {
	return (
		<Link href={'/dashboard/recipes/create'}>
			<Button className="border-2 border-solid border-orange-base bg-inherit text-orange-base hover:bg-orange-base hover:text-white">
				<Plus />
			</Button>
		</Link>
	)
}

export default Create
