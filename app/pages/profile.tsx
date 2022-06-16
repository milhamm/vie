import { Box, Button } from "@chakra-ui/react";
import DefaultLayout from "components/Layouts/DefaultLayout";
import { Image } from "@chakra-ui/react";
import React from "react";
import withAuth from "lib/withAuth";
import useProfile from "hooks/useProfile";

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
              {/* <h2 className="text-xs	text-[white]">Telkom University</h2> */}
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

      <div className="p-8">
        <h1 className="text-lg font-semibold	text-[#FF3DE0]">Competition</h1>
      </div>
      <div className="flex justify-center">
        <div className="h-[140px] w-[420px] rounded-lg	bg-[green]">
          <div className="p-4">
            <h1 className="text-[white]">Leader</h1>
            <h1 className="font-black	text-3xl	text-[white]">
              Gemastik XII - UX Design
            </h1>

            <div className="mt-5 flex justify-end">
              <div className="mr-4 h-[30px] w-[30px] bg-[orange] rounded-full"></div>
              <h1 className="text-base	font-medium	text-[white]">1st Winner</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="h-[140px] w-[420px] rounded-lg	bg-[purple]">
          <div className="p-4">
            <h1 className="text-[white]">Business Analyst</h1>
            <h1 className="font-black	text-3xl	text-[white]">
              Code 2020 - IT Business
            </h1>

            <div className="mt-5 flex justify-end">
              <div className="mr-4 h-[30px] w-[30px] bg-[grey] rounded-full"></div>
              <h1 className="text-base	font-medium	text-[white]">2nd Winner</h1>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
