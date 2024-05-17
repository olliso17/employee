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
import React, { useEffect, useState } from 'react';
import { ColumnList } from './column_list';
import { InputSearch } from './input_search';
import { Paginate } from './paginate';
import { fetchEmployees } from '../router/router';

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
    const [sortConfig, setSortConfig] = useState<{ key: keyof Employee, direction: 'ascending' | 'descending' } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);
    // useEffect(() => {
    //     async function fetchData() {
    //         const data = await fetchEmployees();
    //         setEmployees(data);
    //     }
    //     fetchData();
    // }, []);

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

    


    return (
        <Box overflowX="auto">
            <InputSearch
                setCurrentPage={setCurrentPage}
                setEmployees={setEmployees}
                initialEmployees={initialEmployees}
                handleSort={handleSort} // Passando handleSort para InputSearch
                children={<Button colorScheme="blue" marginLeft={["0", "2"]} marginTop={["2", "0"]}>Adicionar</Button>}
            />
            <Paginate employees={employees} setCurrentPage={setCurrentPage} currentPage={currentPage} itemsPerPage={itemsPerPage}/>

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
