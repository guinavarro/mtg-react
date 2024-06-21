import { Input } from '@mui/base';
import { getCard } from '../services/apiService'
import { useState } from 'react'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import CardComponent from '../components/CardComponent';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [cards, setCards] = useState([]);
    const [message, setMessage] = useState('');
    const [searchMade, setSearchMade] = useState(false);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const searchHandler = async () => {
        try {

            if (searchValue === '') {
                setCards([]);
                setMessage('');
                setSearchMade(true);
                return;
            }

            let response = await getCard(searchValue);

            if (response.request.status === 200) {
                if (response.data.cards.length > 0) {
                    let cardsWithImage = response.data.cards.filter(card => card.imageUrl);
                    setCards(cardsWithImage);
                    setMessage('');
                } else {
                    setCards([]);
                    setMessage(`Não foi encontrado nenhuma carta com o nome ${searchValue}`);
                }
            }

            setSearchMade(true);
        } catch (error) {
            setCards([]);
            setMessage('Ocorreu um erro na pesquisa');
            setSearchMade(true);
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
                <TextField
                    label="Digite o nome da carta"
                    variant="outlined"
                    value={searchValue}
                    onChange={handleInputChange}
                    sx={{ flexGrow: 1 }} // Para ocupar todo o espaço disponível
                />
                <IconButton
                    onClick={searchHandler}
                    sx={{ height: '100%' }} // Ajustando a altura para ser igual à do TextField
                >
                    <SearchIcon />
                </IconButton>
            </Box>
            {searchMade && (
                <Box width="100%">
                    {cards.length ? (
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {cards.map((card) => (
                                <Grid item xs={12} sm={6} md={3} key={card.id}>
                                    <CardComponent card={card} />
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Typography sx={{ mt: 2 }}>
                            {message}
                        </Typography>
                    )}
                </Box>
            )}
        </Box>
    )
}