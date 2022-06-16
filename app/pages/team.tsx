import {
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import DefaultLayout from "components/Layouts/DefaultLayout";
import useSWR from "swr";
import { fetcher } from "client/api";
import TeamCard from "components/TeamCard";
import { TeamType } from "types";

const Team = () => {
  const { data, error } = useSWR<Array<TeamType>>("/team", fetcher);

  return (
    <DefaultLayout>
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

        <div className="mt-[4rem] flex flex-col gap-4">
          {data &&
            data.map((team) => (
              <TeamCard
                key={team.id}
                currentMember={1}
                event={team.competition.name}
                maxMember={team.max_member}
                teamName={team.team_name}
                roles={team.roles_offered}
                color_code={team.color_code}
              />
            ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Team;
