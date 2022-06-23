import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  Tabs,
  TabList,
  Spinner,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import CommonTab from "components/CommonTab";
import Fallback from "components/Fallback";
import useTeam from "hooks/useTeam";
import withAuth from "lib/withAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import { TeamType } from "types";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  const role = ctx.req.cookies.role;

  return {
    props: {
      config: token ? { token, role } : null,
    },
  };
});

const DetailCompetition = ({ config }) => {
  const router = useRouter();
  const { id } = router.query;
  const { team, error, requestJoin, loading } = useTeam<TeamType>({
    token: config?.token,
    id: id as string,
  });

  if (error) {
    return (
      <Fallback code={error.statusCode} message={error.message} link="/team" />
    );
  }

  if (!team) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const isJoined = team.join_status === 2;
  const isRequesting = team.join_status === 1;

  return (
    <>
      <div className="flex p-6 gap-6 items-center">
        <Link href="/team">
          <a>
            <ChevronLeftIcon
              fontSize={40}
              fontWeight="900"
              color="main.500"
            ></ChevronLeftIcon>
          </a>
        </Link>
        <div>
          <Text fontSize={24} fontWeight="900" color="main.500">
            {team.team_name}
          </Text>
        </div>
      </div>
      <div className="flex px-8">
        <Box boxSize="60px">
          <Avatar
            src={team?.leader?.image}
            getInitials={() => team.leader.name.substring(0, 1)}
            size="lg"
          />
        </Box>

        <div className="flex items-center px-4">
          <div>
            <h1 className="font-bold">{team?.leader?.name ?? "-"}</h1>
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
          <h1 className="pt-8 font-bold">Joined Member</h1>
          <div>
            <AvatarGroup className="pt-2" size="md">
              {team.TeamMember.map((member) => (
                <Avatar
                  name={member.user.name}
                  src={member.user.image}
                  key={member.user.id}
                />
              ))}
            </AvatarGroup>
          </div>
        </div>
      </div>
      <div className="px-8 mb-8">
        <Button
          color="white"
          isFullWidth
          bg="main.500"
          size="md"
          disabled={isJoined || isRequesting}
          isLoading={loading}
          onClick={() => requestJoin()}
        >
          {isRequesting ? (isJoined ? "Joined" : "Requested") : "Join Team"}
        </Button>
      </div>
    </>
  );
};

export default DetailCompetition;
