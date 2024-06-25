import React, { useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>contact</h1>

      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>update</button>
    </div>
  );
};

export default Contact;
