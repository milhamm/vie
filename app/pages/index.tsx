import { BellIcon } from "@chakra-ui/icons";
import { Icon, Slider, Text } from "@chakra-ui/react";
import HomeCarousel from "components/HomeCarousel";
import DefaultLayout from "components/Layouts/DefaultLayout";
import TeamCard from "components/TeamCard";
import useTeam from "hooks/useTeam";
import Link from "next/link";
import { TeamType } from "types";

export const getServerSideProps = async (ctx) => {
  const role = ctx.req.cookies.role;

  return {
    props: {
      config: { role: role ? role : null },
    },
  };
};

const Home = ({ config }) => {
  const { team } = useTeam<Array<TeamType>>({ token: config.token });

  return (
    <DefaultLayout title="Vie" role={config.role}>
      <div>
        <div className="w-full bg-[#FF3DE0] h-[171px] p-6 auth-banner flex justify-between">
          <Text fontSize={36} fontWeight="900" color="white">
            VIE
          </Text>
          <Link href="/offers">
            <a>
              <Icon boxSize={8} color="white" as={BellIcon} />
            </a>
          </Link>
        </div>
        <div className="px-6 mt-[-4rem] flex flex-col items-between">
          <HomeCarousel />
          <div className="mt-[3rem] flex justify-between ">
            <Text fontSize={15} fontWeight="800" color="Grey">
              Team Recomendation
            </Text>
            <Link href="/team">
              <a>
                <Text fontSize={15} fontWeight="400" color="Grey">
                  Show All
                </Text>
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {team &&
            team.slice(0, 3).map((val) => (
              <div key={val.id}>
                <TeamCard data={val} />
              </div>
            ))}
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
