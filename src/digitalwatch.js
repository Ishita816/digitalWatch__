import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  // Formatting the time to display as HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  return (
    <div style={{ fontSize: '48px', fontFamily: 'monospace', textAlign: 'center' }}>
      {formattedTime}
    </div>
  );
}

export default DigitalClock;
