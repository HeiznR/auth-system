import { z } from "zod";

const UserSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1),
  email: z.email(),
});

export const UserArraySchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;
