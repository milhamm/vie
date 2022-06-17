import React from "react";
import withAuth from "lib/withAuth";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token,
    },
  };
});

const EditProfile = ({ token }) => {
  return (
    <div>
      <h1>Edit Profile</h1>
    </div>
  );
};

export default EditProfile;
