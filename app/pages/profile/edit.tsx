import {
  Box,
  Tabs,
  TabList,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  TabPanels,
  TabPanel,
  Spacer,
  Flex,
  Icon,
} from "@chakra-ui/react";

import React from "react";
import withAuth from "lib/withAuth";
import { Image } from "@chakra-ui/react";
import CommonTab from "components/CommonTab";
import { CloseIcon } from "@chakra-ui/icons";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token,
    },
  };
});

const EditProfile = ({ token }) => {
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-black text-[#FF3DE0]">Profile</h1>
      </div>
      <div className="flex justify-center">
        <Box boxSize="100px">
          <Image src="https://bit.ly/dan-abramov" borderRadius="10px"></Image>
        </Box>
      </div>
      <div className="p-8">
        <Tabs colorScheme="pink" isFitted>
          <TabList border="none">
            <CommonTab>Personal Data</CommonTab>
            <CommonTab>Skill</CommonTab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="pt-4">
                <FormControl>
                  <div className="pb-4">
                    <FormLabel htmlFor="full-name">Full Name</FormLabel>
                    <Input id="full-name" placeholder="Muhammad Memeng" />
                  </div>
                  <div className="pb-4">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" placeholder="memeng@gmail.com" />
                  </div>
                  <div className="pb-4">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Flex minWidth="max-content" alignItems="center" gap="2">
                      <Input id="password" placeholder="********" />
                    </Flex>
                  </div>
                  <div>
                    <FormLabel htmlFor="university">University</FormLabel>
                    <Select placeholder="Telkom University">
                      <option value="option2">
                        Institut Teknologi Bojongsoang
                      </option>
                      <option value="option1">Universitas Padjajaran</option>
                    </Select>
                  </div>
                  <div className="pt-8">
                    <Button isFullWidth bg="main.500" color="white">
                      Update Profile
                    </Button>
                  </div>
                </FormControl>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="pt-4">
                <h1 className="font-bold">Your Skill</h1>
                <div className="grid grid-cols-1 divide-y">
                  <Flex minWidth="max-content" alignItems="center" gap="2">
                    <h1 className="pt-4 pb-4">UI/UX Designer</h1>
                    <Spacer />
                    <Box p="4">
                      <CloseIcon w={3} h={3} color="grey.500" />
                    </Box>
                  </Flex>
                  <Flex minWidth="max-content" alignItems="center" gap="2">
                    <h1 className="pt-4 pb-4">Frontend Developer</h1>
                    <Spacer />
                    <Box p="4">
                      <CloseIcon w={3} h={3} color="grey.500" />
                    </Box>
                  </Flex>
                  <Flex minWidth="max-content" alignItems="center" gap="2">
                    <h1 className="pt-4 pb-4">Backend Developer</h1>
                    <Spacer />
                    <Box p="4">
                      <CloseIcon w={3} h={3} color="grey.500" />
                    </Box>
                  </Flex>
                  <Flex minWidth="max-content" alignItems="center" gap="2">
                    <h1 className="pt-4 pb-4">Data Science</h1>
                    <Spacer />
                    <Box p="4">
                      <CloseIcon w={3} h={3} color="grey.500" />
                    </Box>
                  </Flex>
                </div>
                <div className="pt-4">
                  <h1 className="font-bold">Add Skill</h1>
                  <div className="pt-4">
                    <Input
                      id="add-skill"
                      placeholder="Skill (co: Fullstack Web Developer)"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Button isFullWidth bg="main.500" color="white">
                  Update Profile
                </Button>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default EditProfile;
