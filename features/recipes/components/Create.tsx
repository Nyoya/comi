import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { Plus } from '../../../components/ui/icons'

const Create = () => {
	return (
		<Link href={'/dashboard/recipes/create'}>
			<Button className="bg-[#E98025] hover:bg-[#E98025]">
				<Plus />
			</Button>
		</Link>
	)
}

export default Create
