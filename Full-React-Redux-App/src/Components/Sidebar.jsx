import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  return (
    <Box border="1px solid red" width="250px" height="100vh">
      <Stack direction="column">
        <Box border="1px solid red" height="15vh">
          {/* user profile */}
        </Box>
        <Box border="1px solid red" height="70vh">
          <Flex direction="column">
            <Box border="1px solid blue">
              <Flex>
                <Text>All</Text>
                <Text marginLeft={"auto"}>4</Text>
              </Flex>
            </Box>
            <Box border="1px solid blue">
              <Flex>
                <Text>Personal</Text>
                <Text marginLeft={"auto"}>1</Text>
              </Flex>
            </Box>
            <Box border="1px solid blue">
              <Flex>
                <Text>Official</Text>
                <Text marginLeft={"auto"}>2</Text>
              </Flex>
            </Box>
            <Box border="1px solid blue">
              <Flex>
                <Text>Others</Text>
                <Text marginLeft={"auto"}>1</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box border="1px solid red" height="10vh">
          <Button width="100%">{isAuth && "LOGOUT"}</Button>
        </Box>
      </Stack>
    </Box>
  );
};
