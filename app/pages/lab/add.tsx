import {
  Button,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import withAuth from "lib/withAuth";
import useLabs from "hooks/useLabs";
import { useRouter } from "next/router";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  const role = ctx.req.cookies.role;

  return {
    props: {
      config: { token, role },
    },
  };
});

const AddMember = ({ config }) => {
  const { addMember } = useLabs(config.token);

  const toast = useToast();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState("");
  const [major, setMajor] = useState("S1 Informatics");
  const [academic_year, setAcademicYear] = useState("2019");

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
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Email</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Text mb="8px" fontWeight="500">
              Skills
            </Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Password</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Major</Text>
            <Select
              focusBorderColor="main.500"
              size="md"
              boxShadow="0 0 0 1px #D3D3D3"
              placeholder="Select your Major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            >
              <option value="S1 Informatika">S1 Informatika</option>
              <option value="S1 RPL">S1 RPL</option>
              <option value="S1 DKV">S1 DKV</option>
            </Select>
          </div>
          <div className="mb-6">
            <Text mb="8px">Academic Year</Text>
            <Select
              focusBorderColor="main.500"
              size="md"
              boxShadow="0 0 0 1px #D3D3D3"
              placeholder="Select your Academic Year"
              value={academic_year}
              onChange={(e) => setAcademicYear(e.target.value)}
            >
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
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
          onClick={() => {
            try {
              addMember({
                name,
                email,
                password,
                skills,
                major,
                academic_year,
              });

              toast({
                title: "Accepted",
                description: "Member has been added",
                status: "success",
                isClosable: true,
              });
              router.push("/lab");
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
          Add Member
        </Button>
      </div>
    </div>
  );
};

export default AddMember;
