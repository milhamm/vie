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
  const token = ctx.req.cookies?.token;
  const role = ctx.req.cookies?.role;

  return {
    props: {
      config: { token, role: role ? role : null },
    },
  };
});
const AddHistoryPage = ({ config }) => {
  const { addHistory } = useTeam(config.token);
  const toast = useToast();
  const router = useRouter();

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");

  return (
    <div>
      <div className="flex p-6 gap-6 items-center">
        <div>
          <Link href="/profile">
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
            Add Competition History
          </Text>
        </div>
      </div>
      <div className="px-6 mt-[2.5rem] flex flex-col items-between">
        <div>
          <div className="mb-6">
            <Text mb="8px">Competition Name</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              placeholder="Gemastik XII"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Status</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              placeholder="First Winner"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Role</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="text"
              placeholder="Leader"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mt-2 px-6">
        <Button
          onClick={() => {
            try {
              addHistory({ name, status, role });
              toast({
                title: "Accepted",
                description: "Member has been accepted successfully",
                status: "success",
                isClosable: true,
              });
              router.push("/profile");
            } catch (error) {
              toast({
                title: "Error",
                description: "An error occured",
                status: "error",
                isClosable: true,
              });
            }
          }}
          colorScheme="white"
          color="white"
          bg="main.500"
          isFullWidth
          fontWeight={400}
          mb={4}
          size="lg"
          fontSize="md"
          borderRadius={8}
        >
          Add History
        </Button>
      </div>
    </div>
  );
};

export default AddHistoryPage;
