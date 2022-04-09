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
      // showCompetition
      break;
    case "POST":
      // addCompetition
      break;
    case "DELETE":
      // deleteCompetition
      break;
    default:
      break;
  }
}
