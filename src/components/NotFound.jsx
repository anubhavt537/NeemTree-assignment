import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const [time, setTIme] = useState(5);
  if (time == 1) {
    setTimeout(() => {
      navigate("/");
    }, 500);
  }
  useEffect(() => {
    setInterval(() => {
      setTIme((prev) => prev - 1);
    }, 1000);
  }, []);
  const style = {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 50px",
  };
  return (
    <div style={style}>
      <h2>This page doesn't seem to exist.</h2>
      <h3>You will we redirecting to Dashboard page in {time} second</h3>
      <img
        style={{ width: "100%" }}
        src="https://ipx-cdn.lottiefiles.com/X8T2hwy9tg623aiXImlKnvixcScV-N66PGhmJsqUeQ8/fill/1200/600/no/0/aHR0cHM6Ly9kM2psNzY5b3k2OXk3Yi5jbG91ZGZyb250Lm5ldC8yMDIyLzA4LzQwNC1QYWdlLUJsb2ctQ292ZXIucG5n.jpg"
        alt="page-not-found-img"
      />
    </div>
  );
};

export default Error;
