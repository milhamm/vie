import { Button, Input, Select, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { AttachmentIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import withAuth from "lib/withAuth";

const Lab = () => {
  return (
    <div>
      <div className="flex p-6 gap-6 items-center">
        <div>
          <ChevronLeftIcon
            fontSize={40}
            fontWeight="900"
            color="main.500"
          ></ChevronLeftIcon>
        </div>
        <div>
          <Text fontSize={24} fontWeight="900" color="main.500">
           RPLGBT Laboratory
          </Text>
        </div>
      </div>
      <div className="px-6 mt-[2.5rem] flex flex-col items-between">
        <div>
          <div className="mb-6">
            <Text mb="8px" fontWeight="500">
              Full Name
            </Text>
            <Input focusBorderColor="main.500" size="md" type="text" />
          </div>
          <div className="mb-6">
            <Text mb="8px">Major</Text>
            <Select
              focusBorderColor="main.500"
              size="md"
              boxShadow="0 0 0 1px #D3D3D3"
              placeholder="Select your Major"
            >
              <option value="option1">S1 Informatika</option>
              <option value="option2">S1 RPL</option>
              <option value="option3">S1 DKV</option>
            </Select>
          </div>
          <div className="mb-6">
            <Text mb="8px">Academic Year</Text>
            <Select
              focusBorderColor="main.500"
              size="md"
              boxShadow="0 0 0 1px #D3D3D3"
              placeholder="Select your Academic Year"
            >
              <option value="option1">2019</option>
              <option value="option2">2020</option>
              <option value="option3">2021</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="mt-4 px-6">
        <Button
          colorScheme="white"
          color="main.500"
          border="2px solid #FF3DE0"
          isFullWidth
          fontWeight={400}
          mb={4}
          size="lg"
          fontSize="md"
          borderRadius={8}
        >
          Add Member
        </Button>
      </div>
    </div>
  );
};

export default Lab;
