import { Container, CardHeader, CardMedia, Avatar, Typography, Box, Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';

export default function CardComponent({ card }) {
    const [cardPrimaryColor, setCardPrimaryColor] = useState('');
    const [cardImage, setCardImage] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleCardLoading = () => {

        if (card.imageUrl) {
            const img = new Image();
            img.src = card.imageUrl;

            img.onload = () => {
                setCardImage(card.imageUrl);
                setIsLoading(false);
            };
            img.onerror = () => {
                setIsLoading(false);

            }
        } else {
            setIsLoading(false);
        }
        // setCardDescription(card.text)
    }


    useEffect(() => {
        handleCardLoading();
    }, [card])


    return (
        <Box sx={{ width: 308, height: 430, position: 'relative' }}>
            {isLoading ? (
                <Skeleton variant="rectangular" width={308} height={430} />
            ) : <Box
                component="img"
                sx={{
                    width: '100%', // A largura da imagem ajusta-se ao contêiner do Grid
                    height: 'auto',
                }}
                src={cardImage}
                alt={card.name}
            />}

        </Box>
    )
}