import { z } from "zod";

const searchSchema = z.object({
  task: z.string().refine(data => data.trim() !== '', {
    message: 'Campo não pode estar vazio',
  }),
});

export default searchSchema

