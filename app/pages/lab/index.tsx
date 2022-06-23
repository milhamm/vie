import { Avatar, Box, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import DefaultLayout from "components/Layouts/DefaultLayout";
import useLabs from "hooks/useLabs";
import withAuth from "lib/withAuth";
import Link from "next/link";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies?.token;
  const role = ctx.req.cookies?.role;

  return {
    props: {
      config: { token, role: role ? role : null },
    },
  };
});

const Lab = ({ config }) => {
  const { labs } = useLabs(config.token);

  return (
    <DefaultLayout title="Lab" role={config.role}>
      <div className="p-8">
        <h1 className="text-3xl font-black text-[#FF3DE0]">{labs?.lab_name}</h1>
        <div className="pt-8 flex justify-between">
          <h1>Member</h1>
          <div>
            <Link href="/lab/add">
              <a>
                <Button size="sm" color="white" bg="main.500">
                  + Add
                </Button>
              </a>
            </Link>
          </div>
        </div>
        {labs &&
          labs.LabMember.map((member) => (
            <div className="pt-8 flex items-center" key={member.id}>
              <Box boxSize="60px">
                <Avatar src={member.user.image} name={member.user.name} />
              </Box>
              <h1 className="px-8">{member.user.name}</h1>
            </div>
          ))}
      </div>
    </DefaultLayout>
  );
};

export default Lab;
