import { Box, Flex, Input } from "@chakra-ui/react";
import { Employee } from "./list_employee";
import { useState } from "react";

type Props = {
    setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    initialEmployees: Employee[]
    handleSort: (key: keyof Employee) => void; 
   
}

export function InputSearch({ setEmployees, setCurrentPage, initialEmployees, handleSort}: Props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);

        const filteredResults = initialEmployees.filter(employee =>
            (employee.name?.toLowerCase().includes(event.target.value.toLowerCase()) || '') ||
            (employee.email?.toLowerCase().includes(event.target.value.toLowerCase()) || '') ||
            (employee.departament?.toLowerCase().includes(event.target.value.toLowerCase()) || '') ||
            (employee.job_position?.toLowerCase().includes(event.target.value.toLowerCase()) || '') ||
            (employee.actions?.toLowerCase().includes(event.target.value.toLowerCase()) || '')
        );

        setEmployees(filteredResults);
        setCurrentPage(1); 
    };

    return (
        <Box mb="4" >
            <Flex justifyContent="space-between" flexWrap="wrap" alignItems="center">
                <Input
                    placeholder="Pesquisar"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    min-width="350px"
                    maxWidth={["100%", "70%", "50%"]}
                    marginBottom={["2", "0", "0"]}
                />
            </Flex>
        </Box>
    )
}
