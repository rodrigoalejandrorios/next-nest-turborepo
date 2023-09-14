import { Button, Container } from "@mui/material";

async function getAllCharacter() {
  const res = await fetch("http://localhost:8000/api/characters/all");
  return res.json();
}

export default async function Characters() {
  const data = await getAllCharacter();
  console.log(data);
  return (
    <Container maxWidth="xl">
      <Button variant="contained">Hola</Button>
    </Container>
  );
}
