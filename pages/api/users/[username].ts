import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const username = req.query.username as string;
  const result = await prisma.user.findFirst({
    where: { username },
  });

  if (result) {
    res.json(result);
  }

  res.status(400).json("User not found");
}
