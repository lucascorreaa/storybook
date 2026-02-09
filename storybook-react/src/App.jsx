import React from "react";
import IconButton from "./components/IconButton";
import TextButton from "./components/TextButton";

export default function App() {
  return (
    <React.Fragment>
      <TextButton label="CTA" />
      <IconButton 
        src="https://avatars.githubusercontent.com/u/91700610?v=4" 
        alt="avatar github" 
      />
    </React.Fragment>
  )
}