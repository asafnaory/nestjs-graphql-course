import { z } from 'zod';

export const UpdatePlayerInput = z
  .object({
    number: z.number(),
    name: z.string().min(3),
    nickNames: z.array(z.string()).optional(),
  })
  .partial();

export type UpdatePlayerInputType = z.infer<typeof UpdatePlayerInput>;
