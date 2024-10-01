import { TypographyBody } from "@/components/typography";
import { ReactNode } from "react";

export const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <TypographyBody
      style={{
        fontWeight: 700,
        fontSize: 20,
      }}
    >
      {children}
    </TypographyBody>
  );
};
