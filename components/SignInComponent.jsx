import { useSession, signIn, signOut } from "next-auth/react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Router from "next/router";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    // if(Router.pathname !== "/hola"){
    //     // if(window.confirm("Redirect?"))Router.push("/hola")
    //     Router.push("/hola")
    // }
    return (
      <>
        Signed in as {session.user.email} <br />
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => signOut()}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign out with Passport
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => signIn()}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in with Passport
        </button>
      </div>
    </>
  );
}
