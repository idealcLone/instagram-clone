import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);

  const posts = await prisma.post.findMany({
    where: { author: id },
  });

  if (posts) {
    return res.status(200).json(posts);
  }

  return res.status(400);
}
