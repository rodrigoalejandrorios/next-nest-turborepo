"use client";
import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import { CardComponent } from "../../components/Card";
import { HeaderComponent } from "../../components/Header";
import { Character, Response } from "../../interfaces/characters.interface";
import { fetchData } from "../../api/apiClient";

export default function Home() {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);
  const [allCharacters, setAllCharacters] = React.useState<Character[] | null>(
    null
  );
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);

    fetchData<Response>(`/characters/all?page=${page}`)
      .then((r) => {
        setCount(Math.ceil(r.count / 10));
        setAllCharacters(r.results);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="SW Market"
        description="Adquiere mas que una experiencia"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            {allCharacters!.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                {allCharacters!.map((ch, id) => (
                  <Grid key={ch.url} item xs={2.4}>
                    <CardComponent {...ch} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              "No data"
            )}
          </div>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              variant="outlined"
              color="primary"
              count={count}
              page={page}
              onChange={handleChange}
              sx={{ mb: 3 }}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
}
