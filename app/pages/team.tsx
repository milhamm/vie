import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import DefaultLayout from "components/Layouts/DefaultLayout";

const Team = () => {
  return (
    <DefaultLayout>
      <div className="p-8">
        <h1 className="text-3xl font-black text-[#FF3DE0] mb-6">
          Competition Team
        </h1>
        <InputGroup>
          <Input />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
      </div>
    </DefaultLayout>
  );
};

export default Team;
