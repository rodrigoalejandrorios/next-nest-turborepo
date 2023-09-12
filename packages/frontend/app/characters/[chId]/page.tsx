import { Button, Container } from "@mui/material";

export default function CharacterById({
  params,
}: {
  params: { chId: string };
}) {
  return (
    <Container maxWidth="xl">
      <Button variant="contained">Hola {params.chId}</Button>
    </Container>
  );
}
