import React from 'react';
import { ChakraProvider, Box, Grid, theme, Center } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Image1 from './Components/Image1';
import Image2 from './Components/Image2';
import { Image3 } from './Components/Image3';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="70vh">
          <ColorModeSwitcher justifySelf="flex-end" />
          <Center>
            <div>
              <Image1 />
              <Image2 />
              <Image3 />
            </div>
          </Center>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
