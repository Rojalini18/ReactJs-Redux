import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReqAuth } from "../Components/RequireAuth";
import { Sidebar } from "../Components/Sidebar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Stack direction="row">
              <Sidebar />
              <Home />
            </Stack>
          </ReqAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;
