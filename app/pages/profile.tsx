import DefaultLayout from "components/Layouts/DefaultLayout";
import React from "react";
import withAuth from "lib/withAuth";

import ProfileContainer from "components/ProfileContainer";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token,
    },
  };
});

const Profile = ({ token }) => {
  return (
    <DefaultLayout title="Profile">
      <ProfileContainer token={token} editable={true} id={null} />
    </DefaultLayout>
  );
};

export default Profile;
