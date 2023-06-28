import { useEffect, useState } from "react";

const UseTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
        
    }, 1000);
  }, []);
  return time;
};
