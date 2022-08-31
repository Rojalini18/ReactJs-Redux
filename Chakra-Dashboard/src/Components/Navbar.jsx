import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  return (
    <div>
      <ChakraProvider>
        <Box boxshadow="lg">
          <Flex>
            <img
              style={{ width: '40px', height: '40px' }}
              src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
              alt=""
            />
            <ColorModeSwitcher position="right" />
            <ButtonGroup variant="outline" spacing="6" ml="65%">
              <Button colorScheme="#7f59d4" variant="ghost">
                Sign In
              </Button>
              <Button colorScheme="#7f59d4">sign Up</Button>
              <Button colorScheme="blue" variant="solid" bg="#7f59d4">
                Post a Job 🚀
              </Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </ChakraProvider>
    </div>
  );
};

export default Navbar;
