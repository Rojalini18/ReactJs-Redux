import React from 'react'
import {
    ChakraProvider,
    Box,
    Text,
    Grid,
    theme,
    Flex,
    SimpleGrid,
    GridItem,
    Center,
} from '@chakra-ui/react';

function Image2() {
    return (
        <div>
            <ChakraProvider theme={theme}>
                <Flex>
                    <Box h='400px' width='100px'>
                        <Text mt='2rem' >Mobile</Text>
                        <SimpleGrid w='15rem' color='white' columns={1} >
                            <Box bg='#a764a9' mt='2rem' height='200px' mb='10px'> </Box>
                            <Box bg='#f26c4f' height='200px' mb='10px'> </Box>
                            <Box bg='#6dcff6' height='200px' mb='10px'> </Box>
                        </SimpleGrid>
                    </Box>
                <Box>
                    <Center>
                    <Text mt='2rem' ml='550px' >Desktop</Text>
                    </Center>
                        <Grid
                            h='300px' ml='290px' w='300px' mt='30px'
                            templateRows='repeat(5, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                        >
                            <GridItem rowSpan={[1, 3]} colSpan={[5, 4]} bg='#a764a9' w='450px' h='400px' />
                            <GridItem rowSpan={[1, 5]} colSpan={[5, 1]} bg='#f26c4f' w='150px' />
                            <GridItem rowSpan={[1, 2]} colSpan={[5, 4]} bg='#6dcff6' h='200px' w='450px' />
                        </Grid>
                </Box>
                </Flex>
            </ChakraProvider>
        </div>
    )
}

export default Image2;