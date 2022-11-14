import React, { useEffect } from "react";

import useAuthStore from "../store/authStore";
import { IUser } from "../types";
import UserAnchor from "./UserAnchor";

const SuggestedAccounts = () => {
  const { fetchAllUsers, allUsers } = useAuthStore();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <div className="lg:border-b-2 border-gray-200 pb-4">
      <p className="text-gray-400 font-semibold m-3 mt-4 hidden xl:block">
        Suggested Accounts
      </p>
      <div>
        {allUsers.slice(0, 6).map((user: IUser) => (
          <UserAnchor user={user} key={user._id} />
          // <Link href={`/profile/${user._id}`} key={user._id}>
          //   <div className="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded">
          //     <div className="w-8 h-8">
          //       <Image
          //         src={user.image}
          //         width={34}
          //         height={34}
          //         className="rounded-full"
          //         alt="user profile"
          //         layout="responsive"
          //       />
          //     </div>

          //     <div className="hidden xl:block">
          //       <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
          //         {user.userName.replaceAll(" ", "")}
          //         <GoVerified className="text-blue-400" />
          //       </p>
          //       <p className="capitalize text-gray-400 text-xs">{user.userName}</p>
          //     </div>
          //   </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedAccounts;
