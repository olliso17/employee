'use client'
import { EditIcon, SmallCloseIcon} from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    Input,
    Table,
    Tbody,
    Td,
    Thead,
    Tr,
    VStack
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ColumnList } from './column_list';
import { InputSearch } from './input_search';
import { Paginate } from './paginate';
import { fetchEmployees } from '../router/router';
import { Link } from '@chakra-ui/next-js';

export interface Employee {
    _id?:string
    name: string;
    departament: string;
    email: string;
    job_position: string;
    actions: string;
}

export function ListEmployee() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Employee, direction: 'ascending' | 'descending' } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    useEffect(() => {
        async function fetchData() {
            const data = await fetchEmployees();
            setEmployees(data);
          

        }
        fetchData();
    }, []);

    const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

    const handleSort = (key: keyof Employee) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        const sortedEmployees = [...employees].sort((a, b) => {
            const aValue = a[key];
            const bValue = b[key];

            const aString = aValue != null ? aValue.toString().toLowerCase() : '';
            const bString = bValue != null ? bValue.toString().toLowerCase() : '';

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
                    initialEmployees={employees}
                    handleSort={handleSort}
                />
            
            <Paginate employees={employees} setCurrentPage={setCurrentPage} currentPage={currentPage} itemsPerPage={itemsPerPage} />
           

            <div className="table-wrapper">
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <ColumnList name="Funcionarios" handleSort={() => handleSort('name')} />
                            <ColumnList name="Email" handleSort={() => handleSort('email')} />
                            <ColumnList name="Departamentos" handleSort={() => handleSort('departament')} />
                            <ColumnList name="Cargos" handleSort={() => handleSort('job_position')} />
                            <ColumnList name="Ações" handleSort={() => handleSort('actions')} />
                            <ColumnList name="Opções" handleSort={() => {}} />
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentItems.map((employee, index) => (
                            <Tr key={index}>
                                <Td>{employee.name}</Td>
                                <Td>{employee.email}</Td>
                                <Td>{employee.departament}</Td>
                                <Td>{employee.job_position}</Td>
                                <Td>{employee.actions}</Td>
                                <Td> 
                                    <Flex>
                                        <VStack spacing={4} align="flex-start">
                                            <Link href={"/edit-employee/"+employee._id}>
                                                <Button colorScheme="yellow" marginLeft={["0", "2"]} marginTop={["2", "0"]} title='Editar'>
                                                <EditIcon/>
                                                </Button>
                                            </Link>
                                        </VStack>
                                        <VStack spacing={4} align="flex-start">
                                            <Link href="/delete-employee">
                                                <Button colorScheme="red" marginLeft={["0", "2"]} marginTop={["2", "0"]} title='Deletar'>
                                                <SmallCloseIcon/>
                                                </Button>
                                            </Link>
                                        </VStack>
                                    </Flex>
                                </Td>
                                
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div>
        </Box>
    );
}
