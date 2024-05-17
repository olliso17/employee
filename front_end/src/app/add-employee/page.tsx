
import React from "react";
import { AddEmployee } from "../../components/add-employee";
import { Box, Button, Heading, Link, Stack, VStack } from "@chakra-ui/react";

const AddEmployeePage: React.FC = () => {
  return (
    <Stack align="center" mt={8}>
      <Box
        width="98%"
        margin="2px"
        // maxW="1200px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        p={6}
      >    
        <VStack spacing={4} align="flex-end" >
            <Link href="/">
              <Button colorScheme="blue" marginLeft={["0", "2"]} marginTop={["2", "0"]}>
                Voltar
              </Button>
            </Link>
        </VStack>
          <Heading as="h1" size="lg" mb={4} textAlign="center">
            Adicionar Funcionário
          </Heading>
          <AddEmployee />
        
      </Box>
    </Stack>
  );
};

export default AddEmployeePage;