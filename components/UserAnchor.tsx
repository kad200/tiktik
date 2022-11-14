import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IUser } from "../types";
import { GoVerified } from "react-icons/go";

const UserAnchor = ({ user }: { user: IUser }) => {
  return (
    <div>
      <Link href={`/profile/${user._id}`} key={user._id}>
        <div className="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded">
          <div className="w-8 h-8">
            <Image
              src={user.image}
              width={34}
              height={34}
              className="rounded-full"
              alt="user profile"
              layout="responsive"
            />
          </div>

          <div className="hidden xl:block">
            <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
              {user.userName.replaceAll(" ", "")}
              <GoVerified className="text-blue-400" />
            </p>
            <p className="capitalize text-gray-400 text-xs">{user.userName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserAnchor;