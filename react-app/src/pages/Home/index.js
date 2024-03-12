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
import { Box, Paper, Typography } from "@mui/material";
import { TextField } from '@material-ui/core';

export default function Home() {

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    try{
      const response = fetch("https://8080-cs-71635156394-default.cs-us-west1-ijlt.cloudshell.dev/?authuser=0", { method: form.method, body: formData });
      console.log(response.json());
    }
    catch(e){
      console.error(e);
    }
    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', maxwidth: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <div>
        <TextField
          id="outlined-textarea"
          label="Text"
          placeholder="Enter Text"
          multiline
        />
      </div> */}
      <form method="post" onSubmit={handleSubmit}>
      <div>
        Write your post:
      </div>
      <div>
        <textarea name="postContent" rows={8} cols={80} placeholder="Enter text" />
      </div>
      <hr />
      <button type="submit">Submit</button>
      </form>
    </Box>
  );
}
