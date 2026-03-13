import { Redis } from '@upstash/redis';

const useRedis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = useRedis 
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : {
      get: async () => '0',
      set: async () => 'OK',
      incr: async () => 1,
    };
