"use client";
import { useRouter } from "next/navigation";
function About() {
  const router = useRouter();
  const moveto = () => {
    router.push("/dashboard");
    console.log("Attack");
  };
  return (
    <div>
      <h1>About page</h1>
      <button onClick={moveto}>DashBoard</button>
    </div>
  );
}
export default About;
