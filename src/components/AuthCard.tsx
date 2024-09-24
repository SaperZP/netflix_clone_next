import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const AuthCard: React.FC<CardProps> = ({ title, children }) => {
  return (
    <Card className="w-full rounded-md bg-opacity-80 shadow lg:w-2/5 lg:max-w-md">
      <CardHeader className="mb-3 text-center text-2xl text-red-600">
        {title}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default AuthCard;
