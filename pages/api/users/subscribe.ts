import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  const { from, to } = body;

  const userFrom = await prisma.user.findFirst({ where: { id: from } });
  const userTo = await prisma.user.findFirst({ where: { id: to } });

  if (!userFrom || !userTo) {
    return res.status(400);
  }

  await prisma.user.update({
    where: { id: from },
    data: { following: [...userFrom.following, to] },
  });
  await prisma.user.update({
    where: { id: to },
    data: { followers: [...userTo.followers, from] },
  });

  return res.status(200).json("Success");
}
