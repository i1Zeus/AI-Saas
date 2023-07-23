"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e1a31636-4b52-4484-8a8b-c89d4c573e56");
  }, []);

  return null;
};
