import Image from "next/image";
import Wave from "@/components/wave";
import HomePage from "@/components/Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className="flex  flex-col items-center justify-between">
        <div className="w-full">
          <HomePage />
        </div>
      </main>
    </>
  );
}
