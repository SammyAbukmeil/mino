import { useState } from "react";

const useOverlay = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return [visible, toggleOverlay];
};

export default useOverlay;
