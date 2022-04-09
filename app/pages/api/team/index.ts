// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      // showTeam
      break;
    case "POST":
      // createTeam
      break;
    case "PUT":
      // updateTeam
      break;
    case "DELETE":
      // deleteTeam
      break;
    default:
      break;
  }
}
