import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res);

  if (req.method !== "DELETE") {
    return res.status(501).json({
      message: "Method not Allowed",
    });
  }

  cookies.set("token", null, {
    maxAge: 0,
  });

  return res.status(200).json({
    authenticated: false,
  });
};

export default handler;
