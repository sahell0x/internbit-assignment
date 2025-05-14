import z from "zod";

const loginTypes = z.object({
  userName: z.string().min(2),
  password: z.string(),
});

export default loginTypes;
