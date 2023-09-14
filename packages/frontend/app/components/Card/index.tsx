import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useRouter } from "next/navigation";

type CardProps = {
  url: string;
  name: string;
  birth_year: string;
  height: string;
  gender: string;
};

export const CardComponent: React.FC<CardProps> = ({
  birth_year,
  gender,
  height,
  name,
  url,
}) => {
  const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter()

  const id = url.split('/').at(-2)

  const itemExist = useAppSelector((state) => state.cart);

  React.useEffect(() => {
    setDisabledBtn(itemExist.some((item: any) => item.url === url));
  }, [itemExist, url]);

  const handleAddToCart = () => {};
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1.5 }}>
          {birth_year}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Genero: {gender}</Typography>
        <Typography sx={{ mt: 1.5 }}>Altura: {height}</Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" size="small" onClick={() => router.push(`/characters/${id}`)}>
          Learn More
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          disabled={disabledBtn}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
