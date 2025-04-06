'use client'

import {
  Checkbox,
  Table
} from "@chakra-ui/react"
import { useState } from "react";

interface Data {
  id: string;
  bean: string;
  origin: string;
  process: string;
  level: string;
  end_time: string;
  created_at: string;
}

interface CustomTableProps {
  items: Data[]
}

export default function CustomTable({ items }: CustomTableProps) {
  const [selection, setSelection] = useState<string[]>([])

  const hasSelection = selection.length > 0
  const indeterminate = hasSelection && selection.length < items.length

  const rows = items.map((item) => (
    <Table.Row
      key={item.id}
      data-selected={selection.includes(item.id) ? "" : undefined}
      borderBottomWidth='1px'
    >
      <Table.Cell>
        <Checkbox.Root
          size="sm"
          top="0.5"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="sm"
          aria-label="Select row"
          checked={selection.includes(item.id)}
          onCheckedChange={(changes) => {
            setSelection((prev) =>
              changes.checked
                ? [...prev, item.id]
                : selection.filter((name) => name !== item.id),
            )
          }}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      </Table.Cell>
      <Table.Cell>{item.bean}</Table.Cell>
      <Table.Cell>{item.origin}</Table.Cell>
      <Table.Cell>{item.process}</Table.Cell>
      <Table.Cell>{item.level}</Table.Cell>
      <Table.Cell textAlign="center">{item.end_time}</Table.Cell>
      <Table.Cell textAlign="center">{item.created_at}</Table.Cell>
    </Table.Row>
  ))

  return(
    <Table.ScrollArea maxW="xl" md={{ maxWidth: '1280px' }}>
      <Table.Root size="md" width='full'>
        <Table.Header>
          <Table.Row
            borderBottom="1px solid"
            borderBottomColor="gray.400"
          >
            <Table.ColumnHeader w="6">
              <Checkbox.Root
                size="sm"
                top="0.5"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="sm"
                aria-label="Select all rows"
                checked={indeterminate ? "indeterminate" : selection.length > 0}
                onCheckedChange={(changes) => {
                  setSelection(
                    changes.checked ? items.map((item) => item.id) : [],
                  )
                }}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
              </Checkbox.Root>
            </Table.ColumnHeader>
            <Table.ColumnHeader>Bean</Table.ColumnHeader>
            <Table.ColumnHeader>Origin</Table.ColumnHeader>
            <Table.ColumnHeader>Process</Table.ColumnHeader>
            <Table.ColumnHeader>Level</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">End Time</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Created At</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
}