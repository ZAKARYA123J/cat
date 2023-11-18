import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider, Box, Flex, Spacer, Link, Heading } from '@chakra-ui/react';
function BasicExample() {
  return (
    <>
   
   <Flex bg="black"  style={{ borderBottom: '1px solid white' }}p="4" align="center">
      <Box p="2">
        <Heading size="md" color="white">
        Petbu 
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Link color="white" mr="4">
          Home
        </Link>
        <Link color="white" mr="4">
          Products
        </Link>
        <Link color="white" mr="4">
          About
        </Link>
        <Link color="white" mr="4">
          Contact
        </Link>
      </Box>
    </Flex>
    </>
  );
}

export default BasicExample;
