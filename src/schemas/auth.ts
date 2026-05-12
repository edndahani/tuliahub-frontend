import * as z from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js/max";

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
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must include at least one special character",
    ),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .transform((val) => {
      const phoneNumber = parsePhoneNumberFromString(val, "TZ");
      // console.log(phoneNumber)
      return phoneNumber ? phoneNumber.number.replace("+", "") : val;
    })
    .refine((val) => {
      const phoneNumber = parsePhoneNumberFromString("+" + val);
      const isMobile = phoneNumber?.getType() === "MOBILE";
      const isValid = phoneNumber?.isValid();
      const isTanzania = phoneNumber?.country === "TZ";
      return isValid && isTanzania && isMobile;
    }, "Invalid phone number format"),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Must be a valid email address"),
});

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .transform((val) => {
      const phoneNumber = parsePhoneNumberFromString(val, "TZ");
      return phoneNumber ? phoneNumber.number.replace("+", "") : val;
    })
    .refine((val) => {
      const phoneNumber = parsePhoneNumberFromString("+" + val);
      const isValid = phoneNumber?.isValid();
      const isMobile = phoneNumber?.getType() === "MOBILE";
      const isTanzania = phoneNumber?.country === "TZ"
      return isValid && isTanzania && isMobile;
    }, "Invalid phone number format"),
  password: z.string().min(1, "Password is required"),
});
