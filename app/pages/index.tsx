import { BellIcon } from "@chakra-ui/icons";
import { Icon, Text } from "@chakra-ui/react";
import DefaultLayout from "components/Layouts/DefaultLayout";
import Link from "next/link";

export const getServerSideProps = async (ctx) => {
  const role = ctx.req.cookies.role;

  return {
    props: {
      config: { role },
    },
  };
};

const Home = ({ config }) => {
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
          <div className="bg-indigo-300 h-[141px] w-full rounded-lg  "></div>
          <div className="gap-3 mt-3 flex justify-center">
            <div className="bg-red-500 h-[15px] w-[15px] rounded-full "></div>
            <div className="bg-red-500 h-[15px] w-[15px] rounded-full "></div>
          </div>
          <div className="mt-5 flex justify-between ">
            <Text fontSize={15} fontWeight="800" color="Grey">
              Team Recomendation
            </Text>

            <Text fontSize={15} fontWeight="400" color="Grey">
              Show All
            </Text>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4"></div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
