
import React from "react";
import { EditEmployee } from "../../../components/edit-employee";
import { Box, Button, Heading, Link, Stack, VStack } from "@chakra-ui/react";

const EditEmployeePage: React.FC = ({params}) => {
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
            Editar Funcionário
          </Heading>
          <EditEmployee employeeId={params.id}/>
        
      </Box>
    </Stack>
  );
};

export default EditEmployeePage;