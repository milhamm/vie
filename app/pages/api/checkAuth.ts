import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res);
  const token = cookies.get("token");

  if (req.method !== "POST") {
    return res.status(501).json({
      message: "Method not allowed",
    });
  }

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
      authorized: false,
    });
  }

  return res.status(200).json({
    message: "Authorized",
    authorized: true,
    token,
  });
};

export default handler;
