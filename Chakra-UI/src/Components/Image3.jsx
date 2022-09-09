import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

export const Image3 = () => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Flex mt="400px">
          <Box h="400px" width="100px">
            <SimpleGrid w="8rem" color="white" columns={1}>
              <Box bg="#ffc83c" mt="2rem" height="50px" mb="30px">
                {' '}
              </Box>
              <Box bg="#ffc83c" height="50px" mb="30px">
                {' '}
              </Box>
              <Box bg="#ff3c69" height="150px" mb="30px">
                {' '}
              </Box>
              <Box bg="#6e7dff" height="50px" mb="30px">
                {' '}
              </Box>
              <Box bg="#6e7dff" height="50px" mb="30px">
                {' '}
              </Box>
            </SimpleGrid>
            <Text ml="38px">320px</Text>
          </Box>

          <Box h="400px" width="200px" ml="150px">
            <SimpleGrid w="8rem" color="white" columns={2}>
              <Box
                bg="#ffc83c"
                mt="2rem"
                height="150px"
                width="150px"
                mb="30px"
              >
                {' '}
              </Box>
              <Box
                bg="#ffc83c"
                height="150px"
                width="150px"
                mt="2rem"
                ml="100px"
                mb="30px"
              >
                {' '}
              </Box>
              <Box bg="#ff3c69" height="150px" w="315px" mb="30px">
                {' '}
              </Box>
              <Box
                bg="#6e7dff"
                height="150px"
                width="150px"
                mt="10rem"
                ml="100px"
                mb="30px"
              >
                {' '}
              </Box>
              <Box
                bg="#6e7dff"
                mt="-180px"
                height="150px"
                width="150px"
                mb="30px"
              >
                {' '}
              </Box>
            </SimpleGrid>
            <Text ml="120px">320px</Text>
          </Box>

          <Box h="400px" width="400px" ml="350px">
            <SimpleGrid w="8rem" color="white" columns={3}>
              <Box
                bg="#ffc83c"
                mt="2rem"
                height="150px"
                width="230px"
                mb="30px"
              >
                {' '}
              </Box>
              <Box
                bg="#ffc83c"
                height="150px"
                width="230px"
                mt="2rem"
                ml="200px"
                mb="30px"
              >
                {' '}
              </Box>
              <Box
                bg="#ff3c69"
                height="150px"
                w="475px"
                mb="30px"
                mt="200px"
                ml="-85px"
              >
                {' '}
              </Box>
              <Box
                bg="#6e7dff"
                height="150px"
                width="150px"
                mt="-10px"
                mb="30px"
              >
                {' '}
              </Box>
              <Box
                bg="#6e7dff"
                mt="-10px"
                height="150px"
                width="150px"
                ml="290px"
                mb="30px"
              >
                {' '}
              </Box>
              <Box
                bg="#6e7dff"
                mt="-10px"
                height="150px"
                width="150px"
                ml="80px"
                mb="30px"
              >
                {' '}
              </Box>
            </SimpleGrid>
            <Text ml="100px">1024px</Text>
          </Box>
        </Flex>
      </ChakraProvider>
    </div>
  );
};
