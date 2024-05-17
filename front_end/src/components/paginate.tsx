import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex } from "@chakra-ui/react";
import { Employee } from "./list_employee";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

type Props = {
    employees: Employee[]
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    itemsPerPage: number
}

export function Paginate({ employees, setCurrentPage, currentPage, itemsPerPage }: Props) {

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

    return (
        <Flex justifyContent={["center", "flex-end"]} m="8">
            <Button onClick={handleFirstPage} disabled={currentPage === 1} mr={["2", "0"]} mb={["2", "0"]} marginLeft={["0", "2"]}>
                <FiChevronsLeft />
            </Button>
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
            <Button onClick={handleLastPage} disabled={currentPage === totalPages} mb={["2", "0"]} marginLeft={["0", "2"]}><FiChevronsRight /></Button>
        </Flex>
    )
}