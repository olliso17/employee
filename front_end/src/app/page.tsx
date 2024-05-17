import { Box, Heading, Stack } from "@chakra-ui/react";
import { ListEmployee } from "../components/list_employee";

export default function Home() {
  return (
    <Stack align="center" mt={8}>
      <Box
        width="90%"
        maxW="1200px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        p={6}
      >
        <Heading as="h1" size="lg" mb={4} textAlign="center">
          Tabela de Funcionários
        </Heading>
        <ListEmployee />
      </Box>
    </Stack>

  );
}
