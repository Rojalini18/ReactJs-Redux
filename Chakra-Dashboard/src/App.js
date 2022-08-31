import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Components/Navbar';
import { Dashboard } from './Components/Dashboard';
import Home from './Components/Home';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Navbar/>
          <Dashboard/>
          <Home/>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
