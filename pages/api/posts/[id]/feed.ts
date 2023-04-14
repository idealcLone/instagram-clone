import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);

  const result = await prisma.post.findMany();

  const user = await prisma.user.findFirst({ where: { id } });
  const posts = result.filter(
    (post) => post.author === id || user?.following.includes(post.author)
  );

  const postsWithAuthors = [];

  for (const post of posts) {
    const author = await prisma.user.findFirst({ where: { id: post.author } });
    postsWithAuthors.push({ ...post, user: author });
  }

  postsWithAuthors.sort((a, b) => (a.id > b.id ? 1 : -1));

  if (posts) {
    return res.status(200).json(postsWithAuthors);
  }

  return res.status(400);
}
