import { NextApiRequest, NextApiResponse } from "next";
import aws from "aws-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const s3 = new aws.S3({
      accessKeyId: process.env.APP_AWS_ACCESS_KEY,
      secretAccessKey: process.env.APP_AWS_SECRET_KEY,
      region: process.env.APP_AWS_REGION,
    });

    // 2.
    aws.config.update({
      accessKeyId: process.env.APP_AWS_ACCESS_KEY,
      secretAccessKey: process.env.APP_AWS_SECRET_KEY,
      region: process.env.APP_AWS_REGION,
      signatureVersion: "v4",
    });

    // 3.
    const post = await s3.createPresignedPost({
      Bucket: "myawsbucket-em",
      Fields: {
        key: req.query.file,
      },
      Expires: 60, // seconds
      Conditions: [
        ["content-length-range", 0, 5048576], // up to 1 MB
      ],
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
}
