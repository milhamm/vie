import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  Tabs,
  TabList,
  Spinner,
  Avatar,
} from "@chakra-ui/react";
import CommonTab from "components/CommonTab";
import useTeam from "hooks/useTeam";
import { useRouter } from "next/router";
import { TeamType } from "types";

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token: token ? token : null,
    },
  };
};

const DetailCompetition = ({ token }) => {
  const router = useRouter();
  const { id } = router.query;

  const { team, error } = useTeam<TeamType>(id as string);

  return team ? (
    <>
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
            {team.team_name}
          </Text>
        </div>
      </div>
      <div className="flex px-8">
        <Box boxSize="60px">
          <Avatar
            src={team.leader.image}
            getInitials={() => team.leader.name.substring(0, 1)}
            size="lg"
          />
        </Box>

        <div className="flex items-center px-4">
          <div>
            <h1 className="font-bold">{team.leader.name}</h1>
            <div className="flex">{team.roles_offered}</div>
          </div>
        </div>
        <div className="p-4"></div>
      </div>
      <div className="p-8">
        <Tabs colorScheme="pink">
          <TabList border="none">
            <CommonTab>Competition</CommonTab>
          </TabList>
        </Tabs>
        <div className="pt-4 text-justify">{team.competition.description}</div>
        <div>
          <h1 className="pt-8 font-bold">Institusi</h1>
          <h1 className="pt-1">{team.competition.organizer}</h1>
          <h1 className="pt-8 font-bold">Attachment</h1>
          <h1>{team.competition.guidebook ?? "No attached file"}</h1>
          <h1 className="pt-8 font-bold">Joined Member - </h1>
        </div>
      </div>
      <div className="px-8">
        <Button color="white" isFullWidth bg="main.500" size="md">
          Join Team
        </Button>
      </div>
    </>
  ) : (
    <Spinner />
  );
};

export default DetailCompetition;
