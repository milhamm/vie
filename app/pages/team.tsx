import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
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
          <Input placeholder="Search for Competition" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <div className="mt-5 flex gap-5">
          <div className="w-full">
            <Text>Competition</Text>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
          <div className="w-full">
            <Text>University</Text>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
        </div>

        <div className="mt-[4rem] flex flex-col gap-4">
          <div className="flex justify-center">
            <div className="h-[140px] w-[420px] rounded-lg	bg-[green] flex items-end">
              <div className="p-4 w-full">
                <div className="flex w-full justify-between">
                  <h1 className="text-white text-2xl font-black">SSATeam</h1>
                  <p className="text-white">Designer, Programmer</p>
                </div>
                <div className="flex w-full justify-between">
                  <h6 className="text-white">2 / 3 Members</h6>
                  <p className="text-white">Smart IT Fest - UI/UX Design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-[140px] w-[420px] rounded-lg	bg-[green] flex items-end">
              <div className="p-4 w-full">
                <div className="flex w-full justify-between">
                  <h1 className="text-white text-2xl font-black">SSATeam</h1>
                  <p className="text-white">Designer, Programmer</p>
                </div>
                <div className="flex w-full justify-between">
                  <h6 className="text-white">2 / 3 Members</h6>
                  <p className="text-white">Smart IT Fest - UI/UX Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Team;
