"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const goto = () => {
    router.push("/about");
    console.log("Attack");
  };
  const Account = () => {
    router.push("/account");
    console.log("Account");
  };
  const Signin = () => {
    router.push("/sign");
    console.log("Signin");
  };
  return (
    <div className="container">
      <h1>Welcome to Home page</h1>
      
    <div className="relative gap-20 text-[14px] font-normal text-blue-500">
    PLEASE REVIEW THE CONTENT <Link className="text-[#D22C1F] underline decoration-inherit" href='./pages/dash?'>RETURN POLICY</Link> BEFORE PROCEEDING
    </div>
      <button
        className="ml-3 bg-blue-500 text-white font-semibold py-0.5 px-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={Account}
      >
        Create Account
      </button>
      <button
        className="ml-3 bg-blue-500 text-white font-semibold py-0.5 px-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={Signin}
      >
        Sign In
      </button>
      <button
        className="ml-3 bg-blue-500 text-white font-semibold py-0.5 px-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={goto}
      >
        About Page
      </button>
    </div>
  );
}
