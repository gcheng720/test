/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React from "react";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

//Import Pages
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Simple Text Editor
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}