import { env } from "@/env";
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function getImageURL(key: string) {
  const command = new GetObjectCommand({
    Bucket: env.S3_BUCKET_NAME,
    Key: key,
  });
  const url = await getSignedUrl( s3Client, command);
  return url;
}

export async function getSignedUrlForS3Object(key: string, objectType: string) {
  const command = new PutObjectCommand({
      Bucket: env.S3_BUCKET_NAME,
      Key: key,
      ContentType: objectType,
  });
  const url = await getSignedUrl( s3Client, command, 
    { expiresIn: 3600 }
  );
  return url;
}