// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "DELETE":
      // deleteCompetition

      const id = req.query.id as string;

      await prisma.competition.delete({
        where: {
          id: id,
        },
      });

      res.status(204).end();
      break;

    default:
      res.status(404).send("not allowed");
      break;
  }
}
