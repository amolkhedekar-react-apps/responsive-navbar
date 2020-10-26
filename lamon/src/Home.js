import React from "react";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ theme }, dispatch] = useStateValue();
  const buttonClick = () => {
    // console.log("hello");
    dispatch({
      type: "changeTheme",
      newTheme: { primary: "blue" },
    });
  };
  return <button onClick={buttonClick}>Make me blue!</button>;
}

export default Home;
