"use client";

import { Button } from "@/components/ui/button";
import Error from "@/components/ui/error";
import { Icons } from "@/components/ui/icons";
import { SingInWithGitHub, SingInWithGoogle } from "@/server/actions/auth";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";

function ErrorHandler() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (error) {
    return <Error error={error} />;
  }

  return null;
}

export default function SignInPage() {
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState("");
  const t = useTranslations();
  const onSubmit = (state: string) => {
    startTransition(() => {
      if (state === "google") {
        SingInWithGoogle();
      }
      if (state === "github") {
        SingInWithGitHub();
      }
    });
  };
  return (
    <div className="mx-auto flex h-[85vh] max-w-sm flex-col items-center justify-center space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{t("LoginPage.title")}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {t("LoginPage.description")}
        </p>
      </div>

      <div className="space-y-4">
        <Button
          onClick={() => {
            onSubmit("google");
            setSelected("google");
          }}
          className="w-full"
          variant="outline"
          type="submit"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {isPending && selected === "google" ? (
            <Icons.loader className="mr-2 size-5 animate-spin" />
          ) : (
            <Icons.googleIcon className="mr-2 size-5" />
          )}
          {t("LoginPage.loginGoogle")}
        </Button>

        <Button
          onClick={() => {
            onSubmit("github");
            setSelected("github");
          }}
          className="w-full"
          variant="outline"
          type="submit"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {isPending && selected === "github" ? (
            <Icons.loader className="mr-2 size-5 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 size-5" />
          )}
          {t("LoginPage.loginGithub")}
        </Button>
      </div>
      <Suspense fallback={<div> {t("LoginPage.loading")}...</div>}>
        <ErrorHandler />
      </Suspense>
    </div>
  );
}
