'use client'
import {
    Box,
    Button,
    Flex,
    Input,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface Employee {
    name: string;
    department: string;
    job: string;
    actions: string;
}

export function ListEmployee() {
    const initialEmployees: Employee[] = [
        {
            name: "Andre",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },
        {
            name: "Andre",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Do bar",
            job: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Raparigueiro",
            job: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Raparigueiro",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Lg",
            department: "Finge de inocente",
            job: "Analista",
            actions: "aql1"
        },

        {
            name: "Lg",
            department: "Impressionado",
            job: "Analista",
            actions: "aql1"
        },
    ];

    const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Employee, direction: 'ascending' | 'descending' } | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 10;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);

        const filteredResults = initialEmployees.filter(employee =>
            employee.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
            employee.department.toLowerCase().includes(event.target.value.toLowerCase()) ||
            employee.job.toLowerCase().includes(event.target.value.toLowerCase()) ||
            employee.actions.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setEmployees(filteredResults);
        setCurrentPage(1); // Reset page to 1 when performing a new search
    };

    const handleSort = (key: keyof Employee) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        const sortedEmployees = [...employees].sort((a, b) => {
            const aValue = a[key];
            const bValue = b[key];

            const aString = typeof aValue === 'string' ? aValue.toLowerCase() : '';
            const bString = typeof bValue === 'string' ? bValue.toLowerCase() : '';

            if (direction === 'ascending') {
                return aString.localeCompare(bString);
            } else {
                return bString.localeCompare(aString);
            }
        });

        setEmployees(sortedEmployees);
        setSortConfig({ key, direction });
    };

    const totalItems = employees.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <Box overflowX="auto">
            <Box mb="4">
                <Input
                    placeholder="Pesquisar"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    mb="4"
                />
            </Box>
            <Flex justifyContent="flex-end" mt="4">
                <Button onClick={handleFirstPage} disabled={currentPage === 1} mr="2">Primeira</Button>
                <Button onClick={handlePrevPage} disabled={currentPage === 1} mr="2">Anterior</Button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        colorScheme={currentPage === index + 1 ? "blue" : "gray"}
                        mr="2"
                    >
                        {index + 1}
                    </Button>
                ))}
                <Button onClick={handleNextPage} disabled={currentPage === totalPages} mr="2">Próxima</Button>
                <Button onClick={handleLastPage} disabled={currentPage === totalPages}>Última</Button>
            </Flex>
            <Table variant='striped' colorScheme='gray'>
                <Thead>
                    <Tr>
                        <Th cursor="pointer" onClick={() => handleSort('name')} _active={{ color: 'gray.800' }} _hover={{ backgroundColor: 'gray.200' }}>Nome</Th>
                        <Th cursor="pointer" onClick={() => handleSort('department')} _active={{ color: 'gray.800' }} _hover={{ backgroundColor: 'gray.200' }}>Departamento</Th>
                        <Th cursor="pointer" onClick={() => handleSort('job')} _active={{ color: 'gray.800' }} _hover={{ backgroundColor: 'gray.200' }}>Trabalho</Th>
                        <Th cursor="pointer" onClick={() => handleSort('actions')} _active={{ color: 'gray.800' }} _hover={{ backgroundColor: 'gray.200' }}>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {currentItems.map((employee, index) => (
                        <Tr key={index}>
                            <Td>{employee.name}</Td>
                            <Td>{employee.department}</Td>
                            <Td>{employee.job}</Td>
                            <Td>{employee.actions}</Td>
                            <Td><Button colorScheme="blue">Adicionar</Button></Td>
                            <Td><Button colorScheme="blue">Editar</Button></Td>
                            <Td><Button colorScheme="blue">Deletar</Button></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box >
    )
}
