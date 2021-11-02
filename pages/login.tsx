import React from "react";
import { useRouter } from "next/router";

import { loginLanguage } from "../language/login";
import Header from "../components/Header";

export default function Login() {
  const { locale } = useRouter();
  const router = useRouter();

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
      <Header />
      <div>{title}</div>
      <div>{username}</div>
      <input placeholder={usernamePlaceholder} className="border-2" />
      <div>{password}</div>
      <input
        placeholder={passwordPlaceholder}
        type="password"
        className="border-2"
      />
      <div>
        <button className="border-2" onClick={() => router.push("/")}>
          {btnLogin}
        </button>
      </div>
    </div>
  );
}
