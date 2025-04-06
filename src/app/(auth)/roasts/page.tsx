import {
  Heading,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react"
import Table from "@/features/roasts/components/ui/table/table"
import { Link } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"


export default function RoastPage() {
  return (
    <Stack width="full" gap="2" md={{ maxWidth: '992px' }}>
      <Stack width="full" gap="2" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Heading
          as='h2'
          fontWeight='bold'
          fontSize='lg'
        >
          Roasts（10）
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
      <Table items={items} />
    </Stack>
  )
}

const items = [
  { id: "1", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "2", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "3", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "4", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "5", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "6", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "7", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "8", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "9", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "10", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "11", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "12", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "13", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "14", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "15", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "16", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "17", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "18", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "19", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
  { id: "20", bean: "Colombia Patio Bonito Wush Wush Washed", origin: "colombia", process: 'washed', level: 'light', end_time: '20:00', created_at: '2025/04/06' },
]