// TODO: Raka

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token: token ? token : null,
    },
  };
};

const DetailCompetition = ({ token }) => {
  return (
    <div>
      <h1>Detail Competition</h1>
    </div>
  );
};

export default DetailCompetition;
