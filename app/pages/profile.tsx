import DefaultLayout from "components/Layouts/DefaultLayout";
import React from "react";
import withAuth from "lib/withAuth";

import ProfileContainer from "components/ProfileContainer";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  const role = ctx.req.cookies.role;

  return {
    props: {
      config: { token, role },
    },
  };
});

const Profile = ({ config }) => {
  return (
    <DefaultLayout title="Profile" role={config.role}>
      <ProfileContainer token={config.token} editable={true} id={null} />
    </DefaultLayout>
  );
};

export default Profile;
