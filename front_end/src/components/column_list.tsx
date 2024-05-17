import { Th } from "@chakra-ui/react";
import { Employee } from "./list_employee";

type Props = {
    name: string
    handleSort: (key: keyof Employee) => void
}

export function ColumnList({ name, handleSort }: Props) {
    let value: keyof Employee;
    return (
        <Th cursor="pointer" onClick={() => handleSort(value)}
            _active={{ color: 'gray.800' }}
            _hover={{ backgroundColor: 'gray.200' }}>{name}</Th>
    )
}