export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "title" | "subtitle" | "body";
  children: React.ReactNode;
}

/** Junta a classe base do componente com a que vem de fora, em vez de sobrescrevê-la. */
const cx = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const TypographyTitle = ({
  variant,
  children,
  className,
  ...rest
}: TypographyProps) => {
  return (
    <h1 className={cx("typography-title", className)} {...rest}>
      {children}
    </h1>
  );
};

export const TypographySubtitle = ({
  variant,
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <h2 className={cx("typography-subtitle", className)} {...props}>
      {children}
    </h2>
  );
};

export const TypographyBody = ({
  variant,
  children,
  className,
  style,
  ...props
}: TypographyProps) => {
  return (
    <p
      className={cx("typography-body", className)}
      style={{
        lineHeight: 1.3,
        padding: 0,
        margin: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};
