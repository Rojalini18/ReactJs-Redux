import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const tasks = useSelector((state) => state.AppReducer.tasks);
  const dispatch = useDispatch();
  const getTasksHandler = useCallback(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    if (tasks.length === 0) {
      getTasksHandler();
    }
  }, [getTasksHandler, tasks.length]);

  return (
    <Box border="1px solid green" width="100%">
      <Flex justifyContent="space-around">
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">TODO</Text>
          </Box>
        </Box>
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">IN-PROGRESS</Text>
          </Box>
        </Box>
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">DONE</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
