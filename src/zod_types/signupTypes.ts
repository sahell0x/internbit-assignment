import z from "zod";

const passwordValidation = new RegExp( 
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

const signupTypes = z.object({
  userName: z.string().min(2),
  password: z.string().min(8).regex(passwordValidation),
});

export default signupTypes;
