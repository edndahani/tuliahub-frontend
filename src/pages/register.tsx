import TuliaLogo from "../assets/logo/tuliahub.svg?react";

const Register = () => {
  return (
    <div className="max-w-lg min-h-[98vh] mt-1.5 rounded-md shadow border mx-auto flex flex-col items-center p-10">
      <div
        className="flex items-center gap-1 cursor-pointer mb-10"
      >
        <TuliaLogo className="h-6 w-auto" />
        <span className="text-xl font-semibold">TuliaHub</span>
      </div>
      <p className="text-2xl font-semibold mb-5">Sign in</p>
      <form className="flex flex-col mb-5">
        
      </form>
      <section className="flex gap-2 items-center">
        <p className="text-[15px]">Don't have an account?</p>
        <a
          href=""
          className="text-[15px] text-primary"
        >
          Create account
        </a>
      </section>
    </div>
  )
}

export default Register