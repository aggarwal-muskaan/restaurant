import { useState } from "react";

function useSpinner(init) {
  const [spinner, setSpinner] = useState(init);
  const handleSpinner = (val) => {
    setSpinner(val);
  };
  return [spinner, handleSpinner];
}

export { useSpinner };
