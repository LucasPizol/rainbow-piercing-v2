import { TypographyBody } from "@/components/typography";
import { ReactNode } from "react";

export const CardDescription = ({ children }: { children: ReactNode }) => {
  return (
    <TypographyBody
      style={{
        textAlign: "start",
        paddingTop: 18,
      }}
    >
      {children}
    </TypographyBody>
  );
};
