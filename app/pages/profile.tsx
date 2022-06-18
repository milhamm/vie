import {
  Box,
  Button,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import DefaultLayout from "components/Layouts/DefaultLayout";
import { Image } from "@chakra-ui/react";
import React from "react";
import withAuth from "lib/withAuth";
import useProfile from "hooks/useProfile";
import CommonTab from "components/CommonTab";
import HistoryCard from "components/HistoryCard";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token,
    },
  };
});

const Profile = ({ token }) => {
  const { user } = useProfile(token);

  return (
    <DefaultLayout>
      <div className="p-8">
        <h1 className="text-3xl font-black text-[#FF3DE0]">Profile</h1>
      </div>

      <div className="h-[220px] w-full bg-[black]">
        <div className="p-8 flex justify-between">
          <div>
            <h1 className="text-lg font-normal text-[white] mb-1">Halo,</h1>
            <h1 className="text-xl font-semibold text-[white]">{user?.name}</h1>
            <h2 className="text-xs text-[white] mt-1">{user?.email}</h2>

            <div className="flex gap-10 mt-3">
              <h2 className="text-xs text-[white]">{user?.major}</h2>
            </div>
            <div className="mt-5">
              <Button colorScheme="main" size="xs">
                Edit Profile
              </Button>
            </div>
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
            <CommonTab>Portofolio</CommonTab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="flex justify-center h-[200px] items-center">
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
