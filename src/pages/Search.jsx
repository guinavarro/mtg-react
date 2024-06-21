import { Input } from '@mui/base';
import { getCard } from '../services/apiService'
import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import CardComponent from '../components/CardComponent';
import Grid from '@mui/material/Grid';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [cards, setCards] = useState([]);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const searchHandler = async () => {
        try {
            let response = await getCard(searchValue);

            if (response.request.status === 200) {
                console.log(response.data.cards);
                let cardsWithImage = response.data.cards.filter(card => card.imageUrl);

                setCards(cardsWithImage);
            }
        } catch (error) {
            ///
        }
    }

    return (
        <Box>
            <TextField
                label="Digite o nome da carta"
                variant="standard"
                value={searchValue}
                onChange={handleInputChange}></TextField>
            <Button
                variant="outlined"
                onClick={searchHandler}>
                Procurar
            </Button>
            {cards.length ? (
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {cards.map((card) => (
                        <Grid item xs={12} sm={6} md={3} key={card.id}>
                            <CardComponent card={card} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography>
                    Não foi encontrada nenhuma carta com o nome {searchValue}
                </Typography>
            )}
        </Box>
    )
}