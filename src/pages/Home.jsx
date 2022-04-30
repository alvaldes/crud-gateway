import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "CRUD - Home";
  }, []);

  return <h1 className="d-block text-center">Hello World!</h1>;
};

export default About;
