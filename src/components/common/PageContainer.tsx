import Container, { type ContainerProps } from "@mui/material/Container";

type PageContainerProps = ContainerProps;

export function PageContainer({
  children,
  maxWidth = "lg",
  sx,
  ...props
}: PageContainerProps) {
  return (
    <Container
      maxWidth={maxWidth}
      sx={[{ px: { xs: 2, sm: 3, lg: 4 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      {children}
    </Container>
  );
}
