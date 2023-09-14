"use client";
import React from "react";
import { fetchData } from "@/app/api/apiClient";
import { Character } from "@/app/interfaces/characters.interface";
import { Button, Container } from "@mui/material";

export default function CharacterById({
  params:{chId},
}: {
  params: { chId: string };
}) {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);
  const [characters, setCharacter] = React.useState<Character | null>(
    null
  );
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setLoading(true);

    fetchData<Character>(`/characters/${chId}`)
      .then((r) => {
        setCharacter(r);
        setLoading(false)
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <Container maxWidth="xl">
      <Button variant="contained">Hola </Button>
    </Container>
  );
}
