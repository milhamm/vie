import { Button, Input, Link, Select, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const CreateTeamPage = () => {
  return (
    <div>
      <div className="flex p-6">
        <div>Back Button</div>
        <div>
          <Text fontSize={36} fontWeight="900" color="main.500">
            Add Team
          </Text></div>
      </div>
      <div className="px-6 mt-[2.5rem] flex flex-col items-between">
        <div>
          <div className="mb-6">
            <Text mb="8px">Leader Name</Text>
            <Input focusBorderColor="main.500" size="md" type="text" />
          </div>
          <div className="mb-6">
            <Text mb="8px">Team Name</Text>
            <Input focusBorderColor="main.500" size="md" type="text" />
          </div>
          <div className="mb-6">
            <Text mb="8px">Competition Name</Text>
            <Input focusBorderColor="main.500" size="md" type="text" />
          </div>
          <div className="mb-6">
            <Text mb="8px">Institution/University</Text>
            <Select focusBorderColor="main.500" size="md" boxShadow="0 0 0 1px #D3D3D3" placeholder='Select your Institution'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
          <div className="mb-6">
            <Text mb="8px">Competition Description</Text>
            <Textarea focusBorderColor="main.500" size="md" boxShadow="0 0 0 1px #D3D3D3" placeholder='Describe more details about your Competition' />
          </div>
          <div className="mb-6">
            <Text mb="8px">Add Attachment</Text>
            <Input focusBorderColor="main.500" size="md" type="text" />
          </div>
        </div>
      </div>
      <div className="mt-4 px-6">
        <Button
          colorScheme="main"
          isFullWidth
          fontWeight={400}
          mb={4}
          size="lg"
          fontSize="md"
          borderRadius={8}
        >
          Add Team
        </Button>
      </div>
    </div>
  );
};

export default CreateTeamPage;
