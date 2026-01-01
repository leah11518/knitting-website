import React, { ReactNode } from "react";
import Card from "@mui/material/Card";

type GenericCardProps = {
  children: ReactNode;
  className?: string; // optional Tailwind classes
  onClick?: () => void;
};

export const GenericCard = ({
  children,
  className = "",
  onClick,
}: GenericCardProps) => {
  return (
    <Card onClick={onClick} className={className}>
      {children}
    </Card>
  );
};
