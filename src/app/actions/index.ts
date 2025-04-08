"use server";

import { signIn } from "@/auth";

export async function doLogin(formData: FormData) {
  try {
    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
