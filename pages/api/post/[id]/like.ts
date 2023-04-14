import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);
  const userId = Number(req.body.userId);

  const post = await prisma.post.findFirst({
    where: { id },
  });

  if (!post) {
    return res.status(400);
  }

  await prisma.post.update({
    where: { id },
    data: {
      likes: post.likes?.includes(userId)
        ? post.likes?.filter((u) => u !== userId)
        : [...(post.likes || []), userId],
    },
  });

  return res.status(200).json("Success");
}
