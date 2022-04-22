// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const data = req.body;

      try {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        const user = await prisma.users.create({ data: { ...data } });
        res.send(user);
      } catch (error) {
        res.send("Error");
      }

      break;
    default:
      res.status(404).send("Account Registered failed");
      break;
  }
}
