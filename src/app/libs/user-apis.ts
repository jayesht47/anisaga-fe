"user server";
import { User } from "./definitions";

export const registerUser = async (user: User) => {
  const hostname: string | undefined = process.env.SERVER_URL;
  if (hostname == undefined) throw new Error("server url not configured!");
  const registerUrl = hostname ? hostname + "/auth/register" : "";
  const headers: Headers = new Headers();
  headers.set("Content-Type", "application/json");
  const response = await fetch(registerUrl, {
    method: "POST",
    body: JSON.stringify(user),
    headers: headers,
  });

  if (response.status != 200) {
    const respObj = await response.json();
    console.error(
      `receieved status ${
        response.status
      } for register user for ${JSON.stringify(
        user
      )} response json was ${JSON.stringify(respObj)}`
    );
  }

  if (response.status === 200) {
    const respObj = await response.json();
    console.debug("registration successfull");
    console.info(`response json was ${JSON.stringify(respObj)}`);
  }
};
