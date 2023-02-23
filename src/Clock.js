import { useEffect, useState } from "react";

const Clock = () => {
  // inisialisasi state dengan nama state "date" dan dapat diset dengan cara setTime
  // default value adalah new Date() / waktu hari itu
  const [date, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
