import { Button } from "@chakra-ui/react";
import React from "react";

type CustomButtonProps = {
  variant?: "ghost" | "solid" | "navBar";
  stylesProps?: Object;
  children: any;
  OnClick?: () => void;
};

export default function CustomButton({
  variant = "solid",
  children,
  stylesProps = {},
  OnClick,
  ...props
}: CustomButtonProps) {
  return (
    <Button variant={variant} sx={stylesProps} onClick={OnClick} {...props}>
      {children}
    </Button>
  );
}
