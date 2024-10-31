"use server";
import { FormSchema, FormState } from "./definitions";
import { registerUser, loginUser } from "./user-apis";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    userName: formData.get("userName"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.info("validaion sucess calling API");
  registerUser(validatedFields.data);
}

export async function login(state: FormState, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    userName: formData.get("userName"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.info("validaion sucess calling API");
  loginUser(validatedFields.data);
}
