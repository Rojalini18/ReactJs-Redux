import { useState } from "react";
import "./App.css";
import Pin from "./Components/Pin";

function App() {
  const [otp, setOtp] = useState(" ");
  return (
    <div className="App">
      <Pin
        length={4}
        setOtpHandler={(value) => {
          setOtp(value);
        }}
      />
      <h3>OTP value is {otp}</h3>
    </div>
  );
}

export default App;
