import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import DefaultLayout from "components/Layouts/DefaultLayout";
import TeamCard from "components/TeamCard";
import { TeamType } from "types";
import useTeam from "hooks/useTeam";
import Link from "next/link";
import { useState } from "react";
import { useDebounce } from "hooks/useDebounce";

export const getServerSideProps = async (ctx) => {
  const role = ctx.req.cookies.role;

  return {
    props: {
      config: { role: role ? role : null },
    },
  };
};

const Team = ({ config }) => {
  const [search, setSearch] = useState("");
  const [competition, setCompetition] = useState("");
  const [organizer, setOrganizer] = useState("");

  const debounceSearch = useDebounce(search, 500);
  const debounceCompetition = useDebounce(competition, 500);
  const debounceOrganizer = useDebounce(organizer, 500);

  console.log({ debounceSearch });

  const { team, error } = useTeam<Array<TeamType>>({
    query: {
      search: debounceSearch,
      competition: debounceCompetition,
      organizer: debounceOrganizer,
    },
  });

  return (
    <DefaultLayout title="Team" role={config.role}>
      <div className="p-8">
        <h1 className="text-3xl font-black text-[#FF3DE0] mb-6">
          Competition Team
        </h1>
        <InputGroup>
          <Input
            placeholder="Search for Team"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <div className="mt-5 flex gap-5">
          <div className="w-full">
            <Text>Competition</Text>
            <Input
              placeholder="Search for Competition"
              value={competition}
              onChange={(e) => setCompetition(e.target.value)}
            />
          </div>

          <div className="w-full">
            <Text>Organizer</Text>
            <Input
              placeholder="Search for Organizer"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
            />
          </div>
        </div>
        <div className="pt-8 flex justify-end">
          <Link href="/team/create">
            <a>
              <Button size="sm" color="white" bg="main.500">
                + Create Team
              </Button>
            </a>
          </Link>
        </div>
        <div className="mt-2 flex flex-col gap-4">
          {team && team?.map((team) => <TeamCard key={team.id} data={team} />)}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Team;
