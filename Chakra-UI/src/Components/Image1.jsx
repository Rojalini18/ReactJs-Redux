import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  theme,
  Flex,
  Center,
  SimpleGrid,
} from '@chakra-ui/react';

function Image1() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="70vh">
          <Center>
            <Flex>
              <Box>
                <Text>Desktop Layout</Text>
                <Flex color="white">
                  <Center w="150px" h="350px" bg="#0072bb">
                    <Box flex="1">
                      <Text>NAV</Text>
                    </Box>
                  </Center>

                  <Center w="300px" bg="darkorange">
                    <Box flex="1">
                      <Text>CONTENT</Text>
                    </Box>
                  </Center>
                  <Center w="150px" bg="crimson">
                    <Box flex="1">
                      <Text>WIDGET</Text>
                    </Box>
                  </Center>
                </Flex>
              </Box>
              <Center h="350px">
                <Box ml="5rem" h="350px">
                  <Text>Mobile Layout</Text>
                  <center>
                    <SimpleGrid w="20rem" color="white" columns={1}>
                      <Box bg="#0072bb" height="115px">
                        {' '}
                        <Text mt="3rem">NAV</Text>
                      </Box>
                      <Box bg="crimson" height="115px">
                        {' '}
                        <Text mt="3rem">WIDGET</Text>
                      </Box>
                      <Box bg="darkorange" height="115px">
                        {' '}
                        <Text mt="3rem">CONTENT</Text>
                      </Box>
                    </SimpleGrid>
                  </center>
                </Box>
              </Center>
            </Flex>
          </Center>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Image1;
