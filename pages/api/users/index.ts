import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = (req.query.search as string) || "";

  const result = await prisma.user.findMany();

  const users = result.filter((user) => user.username.includes(query));

  if (users) {
    res.json(users);
  }

  res.status(400).json("User not found");
}
