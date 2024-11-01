"use server";

import { cookies } from "next/headers";
import { FormSchema, FormState } from "./definitions";
import { encrypt } from "./session-management";
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
  const respObj = await registerUser(validatedFields.data);
  if (respObj?.token === undefined) {
    console.error("token cannot be null not creating session");
    return;
  }
  const expiresAt = new Date(Date.now() + 3 * 60 * 60 * 1000); // basically valid upto 3 hours from now
  (await cookies()).set(
    "session",
    await encrypt({
      userName: validatedFields.data.userName,
      expiresAt: expiresAt,
      token: respObj?.token,
    }),
    {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    }
  );
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
  // createSession(validatedFields.data.userName, loginRespObj?.token);

  if (respObj?.token === undefined) {
    console.error("token cannot be null not creating session");
    return;
  }
  const expiresAt = new Date(Date.now() + 3 * 60 * 60 * 1000); // basically valid upto 3 hours from now
  (await cookies()).set(
    "session",
    await encrypt({
      userName: validatedFields.data.userName,
      expiresAt: expiresAt,
      token: respObj?.token,
    }),
    {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    }
  );
}
