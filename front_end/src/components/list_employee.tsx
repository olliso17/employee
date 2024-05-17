'use client'
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    Input,
    Table,
    Tbody,
    Td,
    Thead,
    Tr
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ColumnList } from './column_list';

export interface Employee {
    name: string;
    department: string;
    email: string,
    job_position: string;
    actions: string;
}

export function ListEmployee() {
    const initialEmployees: Employee[] = [
        {
            name: "Andre",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },
        {
            name: "Andre",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },

        {
            name: "Emerson",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        }, {
            name: "Andre",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
            actions: "aql1"
        },
        {
            name: "Maria",
            department: "Financeiro",
            email: "email@emotionReact_isolatedHnrs.com",
            job_position: "Analista",
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
            employee.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
            employee.department.toLowerCase().includes(event.target.value.toLowerCase()) ||
            employee.job_position.toLowerCase().includes(event.target.value.toLowerCase()) ||
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
                <Flex justifyContent="space-between" flexWrap="wrap" alignItems="center">
                    <Input
                        placeholder="Pesquisar"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        maxWidth={["100%", "70%", "50%"]}
                        marginBottom={["2", "0", "0"]}
                    />

                    <Button colorScheme="blue" marginLeft={["0", "2"]} marginTop={["2", "0"]}>Adicionar</Button> { }
                </Flex>
            </Box>
            <Flex justifyContent={["center", "flex-end"]} mt="4">
                <Button onClick={handleFirstPage} disabled={currentPage === 1} mr={["2", "0"]} mb={["2", "0"]} marginLeft={["0", "2"]}><ArrowLeftIcon /></Button>
                <Button onClick={handlePrevPage} disabled={currentPage === 1} mr={["2", "0"]} mb={["2", "0"]} marginLeft={["0", "2"]}><ChevronLeftIcon /></Button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        colorScheme={currentPage === index + 1 ? "blue" : "gray"}
                        mr={["2", "0"]}
                        mb={["2", "0"]}
                        marginLeft={["0", "2"]}
                    >
                        {index + 1}
                    </Button>
                ))}
                <Button onClick={handleNextPage} disabled={currentPage === totalPages} mr={["2", "0"]} mb={["2", "0"]} marginLeft={["0", "2"]}><ChevronRightIcon /></Button>
                <Button onClick={handleLastPage} disabled={currentPage === totalPages} mb={["2", "0"]} marginLeft={["0", "2"]}><ArrowRightIcon /></Button>
            </Flex>

            <div className="table-wrapper">
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <ColumnList name="Funcionarios" handleSort={() => handleSort('name')} />
                            <ColumnList name="Email" handleSort={() => handleSort('email')} />
                            <ColumnList name="Departamentos" handleSort={() => handleSort('department')} />
                            <ColumnList name="Cargos" handleSort={() => handleSort('job_position')} />
                            <ColumnList name="Ações" handleSort={() => handleSort('actions')} />
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentItems.map((employee, index) => (
                            <Tr key={index}>
                                <Td>{employee.name}</Td>
                                <Td>{employee.email}</Td>
                                <Td>{employee.department}</Td>
                                <Td>{employee.job_position}</Td>
                                <Td>{employee.actions}</Td>
                                <Td><Button colorScheme="blue">Editar</Button></Td>
                                <Td><Button colorScheme="blue">Deletar</Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div>
        </Box >
    )
}
