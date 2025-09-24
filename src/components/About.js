import { useContext } from "react";
import Header from "./Header";
import userContext from "../utils/userContext";
const About = () => {
    const data=useContext(userContext)
  return (
    <>
      {" "}
      <Header />
      <div style={{ marginTop: "50px" }}>Hi this the Contact Page!!</div>
      <div>I am user:{data.loginInfo}</div> {console.log(data)}
    </>
  );
};
export default About;
