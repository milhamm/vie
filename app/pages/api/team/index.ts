// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      // showTeam
      const team = await prisma.team.findMany();
      res.send(team);
      break;
    case "POST":
      // createTeam
      const data = req.body;
      const createTeam = await prisma.team.create({
        ...data,
      });
      break;
    default:
      res.status(404).send("Not Allowed");
      break;
  }
}