"use server";

import { cookies } from "next/headers";
import { FormSchema, FormState } from "./definitions";
import { createSession, decrypt, deleteSession } from "./session-management";
import { registerUser, loginUser } from "./user-apis";
import { redirect } from "next/navigation";

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
  const respObj = await registerUser(validatedFields.data);
  if (respObj?.token === undefined) {
    console.error("token cannot be null not creating session");
    return;
  }
  await createSession(validatedFields.data.userName, respObj?.token);
  redirect("/dashboard");
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
  const respObj = await loginUser(validatedFields.data);

  if (respObj?.token === undefined) {
    console.error("token cannot be null not creating session");
    return;
  }
  await createSession(validatedFields.data.userName, respObj?.token);
  redirect("/dashboard");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}

export const isLoggedIn = async () => {
  try {
    const cookie = (await cookies()).get("session")?.value;
    if (cookie) {
      const session = await decrypt(cookie);
      return !!session;
    } else return false;
  } catch (e) {
    console.error(`Exception occurred in isLoggedIn : ${e}`);
    return false;
  }
};
