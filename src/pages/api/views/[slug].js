import { redis } from '@/lib/redis';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method === 'GET') {
    const views = await redis.get(`pageviews:${slug}`);
    return res.status(200).json({ views: views || 0 });
  }

  if (req.method === 'POST') {
    const views = await redis.incr(`pageviews:${slug}`);
    return res.status(200).json({ views });
  }

  res.status(405).end(); // Method Not Allowed
}
