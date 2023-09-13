
'use client'
import React from "react";
import { Box, Button, CircularProgress, Container, Grid, Pagination } from "@mui/material";
import { CardComponent } from "./components/Card";
import { HeaderComponent } from "./components/Header";

export default function Home() {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);
  const [allCharacters, setAllCharacters] = React.useState<
    any[] | null
  >(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Hola mundo bienvenido a Codrr"
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
                {allCharacters!.map((character) => (
                  <Grid key={character.id} item xs={3}>
                    <CardComponent
                      image={character.image}
                      name={character.name}
                      species={character.species}
                      status={character.status}
                      id={character.id}
                    />
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
