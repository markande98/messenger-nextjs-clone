import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "@prisma/client";
import { getSession, useSession } from "next-auth/react";

const useOtherUser = (
  conversation: FullConversationType | { users: User[] }
) => {
  const session = getSession();
  const otherUser = useMemo(() => {
    const currentUserEmail = session.then((ses) => ses?.user?.email);

    const otherUser = conversation.users.filter(
      async (user) => user.email !== (await currentUserEmail)
    );

    return otherUser[0];
  }, [session]);

  return otherUser;
};

export default useOtherUser;
