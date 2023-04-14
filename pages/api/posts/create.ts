import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  const { description, image, author } = body;

  const post = await prisma.post.create({
    data: { description, image, author },
  });

  if (post) {
    return res.status(200).json(post);
  }

  return res.status(400);
}
