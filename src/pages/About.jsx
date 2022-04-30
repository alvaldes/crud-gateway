import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "CRUD - About";
  }, []);

  return <h1>About</h1>;
};

export default About;
