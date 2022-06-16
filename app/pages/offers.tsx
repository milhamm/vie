import withAuth from "lib/withAuth";
import React from "react";

// TODO: ridho

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token,
    },
  };
});

const OfferPage = ({ token }) => {
  return (
    <div>
      <h1>Offers</h1>
    </div>
  );
};

export default OfferPage;
