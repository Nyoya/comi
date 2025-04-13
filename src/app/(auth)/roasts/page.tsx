import {
  Heading,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react"
import Table from "@/features/roasts/components/ui/table/table"
import { Link } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { fetchAllRoast } from "@/lib/data"


export default async function RoastPage() {
  const roasts = await fetchAllRoast();
  const roastCount = roasts.length

  return (
    <Stack width="full" gap="2" md={{ maxWidth: '1280px' }}>
      <Stack width="full" gap="2" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Heading
          as='h2'
          fontWeight='bold'
          fontSize='lg'
        >
          {`Roast（${roastCount}）`}
        </Heading>
        <Link
          href="/"
          backgroundColor="#D89323"
          color="white"
          fontWeight="bold"
          borderRadius="sm"
          paddingY="2"
          paddingX="3"
        >
          + Add Roast
        </Link>
      </Stack>
      <InputGroup startElement={<LuSearch color="#a1a1aa" />}>
        <Input
          placeholder="Search..."
          border="1px solid"
          borderColor="gray.300"
          borderRadius="sm"
        />
      </InputGroup>
      <Table items={roasts} />
    </Stack>
  )
}