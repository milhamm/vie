import * as React from "react";
import { Tab } from "@chakra-ui/react";

const CommonTab = ({ children }) => {
  return (
    <Tab
      borderBottomColor="transparent"
      _selected={{
        fontWeight: "bold",
        borderBottomColor: "main.500",
        color: "main.500",
      }}
    >
      {children}
    </Tab>
  );
};

export default CommonTab;
