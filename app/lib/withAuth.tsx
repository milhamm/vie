import axios from "axios";
import api from "client/api";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const withAuth =
  (GetServerSidePropsFunction: GetServerSideProps) =>
  async (ctx: GetServerSidePropsContext) => {
    const token = ctx.req.cookies?.token || null;

    try {
      await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } catch (error) {
      if (error?.response) {
        if (error?.response?.data === "Unauthorized.") {
          return {
            redirect: {
              destination: "/login",
              permanent: false,
            },
          };
        }
      }
    }

    return await GetServerSidePropsFunction(ctx);
  };

export default withAuth;
