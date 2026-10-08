import Container, { type ContainerProps } from "@mui/material/Container";

type PageContainerProps = ContainerProps;

export function PageContainer({
  children,
  maxWidth = false,
  sx,
  ...props
}: PageContainerProps) {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters
      sx={[
        {
          width: "100%",
          maxWidth: maxWidth === false ? "100%" : undefined,
          mx: "auto",
          px: { xs: 2, sm: 2, lg: 2 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Container>
  );
}
