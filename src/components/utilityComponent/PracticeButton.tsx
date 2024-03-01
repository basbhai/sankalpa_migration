"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface PracticeButtonProps {
  id: number;
  desc: string;
  className: string;
}

const PracticeButton: React.FC<PracticeButtonProps> = ({
  id,
  desc,
  className = "",
}) => {
  const router = useRouter();

  function handleClick() {
    router.push(`/practiceArea/${id}`);
  }

  return (
    <button className={className} onClick={handleClick}>
      {desc}
    </button>
  );
};

export default PracticeButton;
