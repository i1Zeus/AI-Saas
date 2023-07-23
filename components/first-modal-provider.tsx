"use client";

import { useEffect, useState } from "react";
import FirstModal from "@/components/first-modal";

export const FirstModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <FirstModal />
    </>
  );
};
