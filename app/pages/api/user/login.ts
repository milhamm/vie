// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import bcrypt from "bcrypt";

type Data = {
  name: string;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { email, password } = req.body;

      try {
        const user = await prisma.users.findFirst({
          where: {
            email: email,
          },
          select: {
            id: true,
            image: true,
            name: true,
            email: true,
            password: true,
          },
        });

        if (user?.password) {
          const validPass = await bcrypt.compare(password, user.password);
          if (validPass) {
            res.send(user);
          } else {
            res.status(401).send("Email or password is wrong");
              
          }
        } else {
          res.status(404).send("user doesnt exist");
          }
        } catch (error) {
          res.send("Erorr")
        }
        break;
  }
}


      
      
    
 
