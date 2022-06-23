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

export const getServerSideProps = async (ctx) => {
  const role = ctx.req.cookies.role;

  return {
    props: {
      config: { role: role ? role : null },
    },
  };
};

const Team = ({ config }) => {
  const { team, error } = useTeam<Array<TeamType>>();

  return (
    <DefaultLayout title="Team" role={config.role}>
      <div className="p-8">
        <h1 className="text-3xl font-black text-[#FF3DE0] mb-6">
          Competition Team
        </h1>
        <InputGroup>
          <Input placeholder="Search for Competition" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <div className="mt-5 flex gap-5">
          <div className="w-full">
            <Text>Competition</Text>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>

          <div className="w-full">
            <Text>University</Text>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
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
