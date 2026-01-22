import { LoginForm } from "../components/login-form"

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50">
      <LoginForm className="w-full max-w-md" />
    </main>
  )
}