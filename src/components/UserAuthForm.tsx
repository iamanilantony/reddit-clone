"use client"

import { cn } from "@/lib/utils";
import React, { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const {toast} = useToast();

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      await signIn("google");
    } 
    catch (e) {
        toast({
          title: "There was a problem",
          description: "There was a problem signing in with google",
          variant: "destructive"
        })
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
