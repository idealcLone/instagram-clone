import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);

  const post = await prisma.post.findFirst({
    where: { id },
  });

  if (!post) {
    return res.status(400);
  }

  const author = await prisma.user.findFirst({
    where: { id: post.author },
  });

  const result = {
    ...post,
    user: author,
  };

  return res.status(200).json(result);
}
