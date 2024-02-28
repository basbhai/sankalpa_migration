import Image from "next/image";
import Wave from "@/components/wave";
import HomePage from "@/components/Home";

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
