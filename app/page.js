import Image from "next/image";
import Hero from "./_components/Hero";

export default function Home() {
  return (
  
   <>
      <Head>
        <title>FluxForm AI</title>
        <meta name="description" content="FluxForm is an AI-powered platform built with Next.js, DaisyUI, HyperUI, Drizzle ORM, Neon Database, and Clerk, designed to simplify form, survey, and questionnaire creation. Experience an intuitive and efficient form-building process with FluxForm." />
      </Head>
       <div>
        <Hero />
       </div>
    </>
  );
}
