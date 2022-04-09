// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      const data = req.body;

      
      try {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        const user  = await prisma.user.create({ data: { ...data } });
        res.send(user);
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    default:
      break;
  }
}
