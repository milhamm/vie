import {
  Box,
  Button,
  Flex,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import React from "react";
import useProfile from "hooks/useProfile";
import CommonTab from "components/CommonTab";
import HistoryCard from "components/HistoryCard";
import Link from "next/link";
import TeamCard from "components/TeamCard";
import { capitalizeFirstLetter } from "lib/capitalize";

const ProfileContainer = ({ token, editable, id }) => {
  const { user, team } = useProfile(token, id);

  const splittedSkill = user.skills
    .split(",")
    .map((val) => capitalizeFirstLetter(val));

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-black text-[#FF3DE0]">Profile</h1>
      </div>

      <div className="h-[220px] w-full bg-[black]">
        <div className="p-8 flex justify-between">
          <div>
            <h1 className="text-lg font-normal text-[white] mb-1">Halo,</h1>
            <Text
              color="white"
              fontSize={24}
              fontWeight={900}
              maxW={240}
              noOfLines={1}
            >
              {user?.name}
            </Text>
            <h1 className="text-xl font-semibold text-[white]"></h1>
            <h2 className="text-xs text-[white] mt-1">{user?.email}</h2>

            <div className="flex gap-10 mt-3">
              <h2 className="text-xs text-[white]">{user?.major}</h2>
            </div>
            {editable && (
              <div className="mt-5">
                <Link href="/profile/edit">
                  <a>
                    <Button colorScheme="main" size="xs">
                      Edit Profile
                    </Button>
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div>
            <Box boxSize="115px">
              <Image
                src={user?.image}
                fallback={
                  <div className="w-[115px] h-[115px] bg-gray-100 rounded flex items-center justify-center">
                    ?
                  </div>
                }
                alt={user?.name}
                borderRadius="8px"
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Tabs colorScheme="pink" isFitted>
          <TabList border="none">
            <CommonTab>Competition</CommonTab>
            <CommonTab>Skill</CommonTab>
            <CommonTab>My Team</CommonTab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div>
                {editable && (
                  <div className="flex justify-end h-[50px]">
                    <Link href="/profile/competition/add">
                      <a>
                        <Button background="main.500" color="white">
                          + Add New
                        </Button>
                      </a>
                    </Link>
                  </div>
                )}

                <div className="flex justify-center items-center flex-col">
                  {user?.history && user.history.length > 0
                    ? user.history.map((h) => (
                        <HistoryCard
                          name={h.name}
                          role={h.role}
                          key={h.id}
                          status={h.status}
                        />
                      ))
                    : "No History"}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 divide-y">
                {splittedSkill.map((skill) => (
                  <Flex
                    key={skill}
                    minWidth="max-content"
                    alignItems="center"
                    gap="2"
                  >
                    <h1 className="pt-4 pb-4">{skill}</h1>
                  </Flex>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                {team && team.length > 0
                  ? team.map((h) => (
                      <div className="mb-4" key={h.id}>
                        <TeamCard data={h} />
                      </div>
                    ))
                  : "No Team"}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default ProfileContainer;
