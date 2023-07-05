"use client"

import { cn } from "@/lib/utils";
import React, { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signIn } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({}) => {
  const [loading, setLoading] = useState(false);

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      await signIn("google");
    } 
    catch (e) {
        //toast
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center")}>
      <Button 
        onClick={loginWithGoogle} 
        disabled={loading} 
        size="sm" 
        className="">
            Google
        </Button>
    </div>
  );
};

export default UserAuthForm;
