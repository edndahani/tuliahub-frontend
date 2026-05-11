import * as z from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  gender: z.enum(["MALE", "FEMALE"], { error: "Please select gender" }),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number")
    .regex(/[^a-zA-Z0-9]/, "Password must include at least one special character"),
  phoneNumber: z
    .string()
    .regex(
      /^255(61|62|63|64|65|66|67|68|69|71|72|73|74|75|76|77|78|79)\d{7}$/,
      "Phone number must be a valid Tanzanian mobile number starting with 255",
    ),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Must be a valid email address"),
});
