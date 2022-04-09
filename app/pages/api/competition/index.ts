// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      // showCompetition
      const competition = await prisma.competition.findMany();
      res.send(competition);

    case "POST":
      // addCompetition
      const data = req.body;
      const addCompetition = await prisma.competition.create({
        ...data,
      });
      res.send(addCompetition);
      break;

    default:
      res.status(404).send("not allowed");
      break;
  }
}
