import {
  Button,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AttachmentIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import withAuth from "lib/withAuth";
import useTeam from "hooks/useTeam";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token,
    },
  };
});

const CreateTeamPage = ({ token }) => {
  const { createTeam, loading } = useTeam(token);
  const toast = useToast();
  const router = useRouter();

  const [team_name, setTeamName] = useState("");
  const [max_member, setMaxMember] = useState(1);
  const [roles_offered, setRolesOffered] = useState("");
  const [color_code, setColorCode] = useState("#fde900");
  const [competition_name, setCompetitionName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <div className="flex p-6 gap-6 items-center">
        <div>
          <Link href="/team">
            <a>
              <ChevronLeftIcon
                fontSize={40}
                fontWeight="900"
                color="main.500"
              ></ChevronLeftIcon>
            </a>
          </Link>
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
            <Text mb="8px">Team Name</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              value={team_name}
              onChange={(e) => setTeamName(e.target.value)}
              required
              placeholder="MyTeam"
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Roles Needed</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              value={roles_offered}
              onChange={(e) => setRolesOffered(e.target.value)}
              required
              placeholder="Frontend Engineer"
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Card Color</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="color"
              value={color_code}
              onChange={(e) => setColorCode(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Max Member</Text>
            <NumberInput
              defaultValue={1}
              min={1}
              max={10}
              focusBorderColor="main.500"
              size="md"
              value={max_member}
              onChange={(valueAsString, valueAsNumber) =>
                setMaxMember(valueAsNumber)
              }
            >
              <NumberInputField borderWidth="2px" />
            </NumberInput>
          </div>
          <div className="mb-6">
            <Text mb="8px">Competition Name</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              required
              value={competition_name}
              onChange={(e) => setCompetitionName(e.target.value)}
              placeholder="Gemastik XII"
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Competition Category</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Business Proposal"
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Competition Organizer</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
              placeholder="Telkom University"
            />
          </div>
          {/* <div className="mb-6">
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
          </div> */}
          <div className="mb-6">
            <Text mb="8px">Competition Description</Text>
            <Textarea
              focusBorderColor="main.500"
              size="md"
              boxShadow="0 0 0 1px #D3D3D3"
              placeholder="Describe more details about your Competition"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* <div className="mb-1">
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
          </div> */}
        </div>
      </div>
      <div className="mt-2 px-6">
        <Button
          color="white"
          bg="main.500"
          isFullWidth
          fontWeight={400}
          mb={4}
          size="lg"
          isLoading={loading}
          fontSize="md"
          borderRadius={8}
          onClick={() => {
            try {
              createTeam({
                competition: {
                  name: competition_name,
                  organizer,
                  description,
                  category,
                },
                team: {
                  team_name,
                  max_member,
                  roles_offered,
                  color_code,
                },
              });
              toast({
                title: "Accepted",
                description: "Team has been successfully added",
                status: "success",
                isClosable: true,
              });
              router.push("/team");
            } catch (error) {
              toast({
                title: "Error",
                description: "An error occured",
                status: "error",
                isClosable: true,
              });
            }
          }}
        >
          Add Team
        </Button>
      </div>
    </div>
  );
};

export default CreateTeamPage;
