import axios from "axios";
import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res);

  const payload = {
    email: req.body.email,
    password: req.body.password,
  };

  console.log({ payload });

  return axios
    .post(`${process.env.BASE_URL}/user/login`, payload)
    .then((response) => {
      cookies.set("token", response.data.access_token, {
        httpOnly: true,
        secure: process.env.ENABLE_SECURE_COOKIES === "true",
        maxAge: 7 * 60 * 60 * 1000,
        sameSite: "lax",
      });

      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${response.data.access_token}`,
          },
        })
        .then((resp) => {
          console.log(resp.data.role);
          cookies.set("role", resp.data.role, {
            httpOnly: true,
            secure: process.env.ENABLE_SECURE_COOKIES === "true",
            maxAge: 7 * 60 * 60 * 1000,
            sameSite: "lax",
          });

          return res.status(200).json({
            status: "success",
            authenticated: true,
          });
        });
    })
    .catch((e) => {
      console.log(e);
      return res.status(401).json({
        message: "unauthorized",
        authenticated: false,
      });
    });
};

export default handler;
