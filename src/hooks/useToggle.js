import { useState } from "react";

function useToggle(init) {
  const [button, handleButton] = useState(init);

  const toggleButton = () => {
    handleButton(!button);
  };
  return [button, toggleButton];
}

export { useToggle };
