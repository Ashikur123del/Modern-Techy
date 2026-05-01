import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://modern-techy.vercel.app"
})

export const { signIn, signUp, useSession } = authClient()