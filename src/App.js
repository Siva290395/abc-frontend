import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://35.168.90.51:5000")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>ABC Company Frontend Application - Version 3</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;