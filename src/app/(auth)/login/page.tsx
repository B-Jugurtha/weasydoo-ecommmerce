"use client";

import { doLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(false);
    const formData = new FormData(event.currentTarget);
    try {
      const response = await doLogin(formData);
      if (!response) {
        console.log(response.error);
        setError(true);
        console.log("error lors de laconnexion");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    // <div className="flex flex-col gap-2">
    //   <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
    //     {error && (
    //       <p className="text-red-500">
    //         Une erreur est survenue lors de la connexion.
    //       </p>
    //     )}
    //     <h1 className="text-2xl font-bold">Se connecter</h1>
    //     <label htmlFor="username" className="flex flex-col gap-1">
    //       Username
    //       <input name="username" id="username" />
    //     </label>
    //     <label htmlFor="password" className="flex flex-col gap-1">
    //       Password
    //       <input name="password" id="password" />
    //     </label>
    //     <button type="submit">Se Connecter</button>
    //   </form>
    // </div>
    // <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    // <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    //   <img class="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    //   <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    // </div>

    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Connexion
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleFormSubmit}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Nom d'utilisateur
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Mot de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se Connecter
              </button>
            </div>
            {error ? (
              <p className="text-red-500 text-center">
                Coordonné incorrectes. Veuillez réessayer.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
