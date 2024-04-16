import { z } from 'zod';

export const createPlayerInput = z.object({
  number: z.number(),
  name: z.string().min(3),
  nickNames: z.array(z.string()).optional(),
});

export type CreatePlayerInputType = z.infer<typeof createPlayerInput>;
