import { handler } from "@/app/api/auth/[...nextauth]/route";
import Signin from "@/components/Signin";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};
const SignInpage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(handler);

  if (session) {
    redirect("/");
  }
  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-24">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
};

export default SignInpage;
