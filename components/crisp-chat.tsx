"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2308d92a-a90c-416e-95b2-f7552766ce51");
  }, []);

  return null;
};
