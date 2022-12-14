import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";

const BlockContext = createContext();

function BlockProvider(props) {
  const [blocks, setBlocks] = useState([]);

  const getBlocks = async () => {
    try {
      const value = await AsyncStorage.getItem("@blocks");
      setBlocks(JSON.parse(value));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <BlockContext.Provider value={{ blocks, setBlocks, getBlocks }}>
      {props.children}
    </BlockContext.Provider>
  );
}

export { BlockContext, BlockProvider };
