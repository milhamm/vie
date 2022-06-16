import { Button, Input, Select, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { AttachmentIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import withAuth from "lib/withAuth";

// TODO: jeki

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token,
    },
  };
});

const CreateTeamPage = ({ token }) => {
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
            Add Team
          </Text>
        </div>
      </div>
      <div className="px-6 mt-[2.5rem] flex flex-col items-between">
        <div>
          <div className="mb-6">
            <Text mb="8px" fontWeight="500">
              Leader Name
            </Text>
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
            <Select
              focusBorderColor="main.500"
              size="md"
              boxShadow="0 0 0 1px #D3D3D3"
              placeholder="Select your Institution"
            >
              <option value="option1">Telkom University</option>
              <option value="option2">Indonesia University</option>
              <option value="option3">Diponegoro University</option>
            </Select>
          </div>
          <div className="mb-6">
            <Text mb="8px">Competition Description</Text>
            <Textarea
              focusBorderColor="main.500"
              size="md"
              boxShadow="0 0 0 1px #D3D3D3"
              placeholder="Describe more details about your Competition"
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Add Attachment</Text>
            <Button
              colorScheme="white"
              color="gray.500"
              border="2px solid #D3D3D3"
              isFullWidth
              fontWeight={400}
              mb={4}
              size="lg"
              fontSize="md"
              borderRadius={8}
            >
              <div className="flex gap-4 items-center">
                <div>
                  <AttachmentIcon></AttachmentIcon>
                </div>
                <div>Upload File</div>
              </div>
            </Button>
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
          Add Team
        </Button>
      </div>
    </div>
  );
};

export default CreateTeamPage;
