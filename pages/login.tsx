import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { loginLanguage } from "../language/login";

export default function Login() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const router = useRouter();
  console.log("locales : ", asPath);

  const {
    title,
    username,
    usernamePlaceholder,
    password,
    passwordPlaceholder,
    btnLogin,
  } = loginLanguage[locale!];

  return (
    <div>
      <div></div>
      <div>
        <select
          defaultValue={locale!}
          onChange={(e) =>
            router.push("/login", "/login", { locale: e.target.value })
          }
        >
          <option value="th-TH">th-TH</option>
          <option value="en-US">en-US</option>
        </select>
      </div>
      <div>{title}</div>
      <div>{username}</div>
      <input placeholder={usernamePlaceholder} />
      <div>{password}</div>
      <input placeholder={passwordPlaceholder} type="password" />
      <div>
        <button onClick={() => router.push("/")}>{btnLogin}</button>
      </div>
    </div>
  );
}
