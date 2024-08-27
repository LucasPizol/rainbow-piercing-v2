export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "title" | "subtitle" | "body";
  children: React.ReactNode;
}

export const TypographyTitle = ({
  variant,
  children,
  ...rest
}: TypographyProps) => {
  return (
    <h1 className="typography-title" {...rest}>
      {children}
    </h1>
  );
};

export const TypographySubtitle = ({ children, ...props }: TypographyProps) => {
  return (
    <h2 className="typography-subtitle" {...props}>
      {children}
    </h2>
  );
};

export const TypographyBody = ({ children, ...props }: TypographyProps) => {
  return (
    <p
      className="typography-body"
      style={{
        lineHeight: 1.3,
        padding: 0,
        margin: 0,
      }}
      {...props}
    >
      {children}
    </p>
  );
};
