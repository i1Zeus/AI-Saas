import { auth } from "@clerk/nextjs";

import prismadb from "@/prismadb";
import { MAX_FREE_COUNT } from "@/constants";

export const increaseApiLimit = async () => {
  const { userId } = auth();
  if (!userId) return;

  const userAPILimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (userAPILimit) {
    await prismadb.userApiLimit.update({
      where: { userId },
      data: { count: userAPILimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId, count: 1 },
    });
  }
};

export const isApiLimitReached = async () => {
  const { userId } = auth();
  if (!userId) return false;

  const userAPILimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userAPILimit || userAPILimit.count < MAX_FREE_COUNT) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimit = async () => {
  const { userId } = auth();
  if (!userId) return 0;

  const userAPILimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userAPILimit) {
    return 0;
  } else {
    return userAPILimit.count;
  }
};
