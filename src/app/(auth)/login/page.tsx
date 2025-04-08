import { redirect } from "next/navigation"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"
 
export default async function Login() {
  return (
    <div className="flex flex-col gap-2">
      <form
        action={async (formData) => {
          "use server"
          try {
            await signIn("credentials", {
              username: formData.get('username'),
              password: formData.get('password'),
              redirect:false
            })
          } catch (error) {
            if (error instanceof AuthError) {
              // return redirect(`/error`)
              console.log(error)
            }
            throw error
          }
          redirect(`/`)
        }}
      >
        <label htmlFor="username">
          Username
          <input name="username" id="username" />
        </label>
        <label htmlFor="password">
          Password
          <input name="password" id="password" />
        </label>
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  )
}