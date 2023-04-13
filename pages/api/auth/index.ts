import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const result = await prisma.user.findFirst({
    where: { username: body.username, password: body.password },
  });

  if (result) {
    return res.status(200).json(result);
  }

  return res.status(400).json("User not found");
}
