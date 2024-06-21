import AddIcon from '@mui/icons-material/Add';
import { Box, Container, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react'
import ReplayIcon from '@mui/icons-material/Replay';


export default function LifeCounterComponent({ isUpsideDown = false, color}) {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const initialState = 30;
    const [lifeCount, setLifeCount] = useState(initialState);
    const [valueCount, setValueCount] = useState(0);


    const lifeCountHandler = (type) => {
        let currentValue = lifeCount;
        if (type === '+'){
            currentValue++;
            setLifeCount(currentValue);
        }else{
            currentValue--;
            setLifeCount(currentValue);
        }
    }

    const buttonHandler = (type) => {
        lifeCountHandler(type);
    }

    const refreshHandler = () =>{
        setLifeCount(initialState);
    }

    return (
        <Container
         sx={{
            width: '100vw',
            height: '50vh',
            bgcolor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            transform: isUpsideDown ? 'rotate(180deg)' : 'none'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 2,
                    width: '80%',
                    maxWidth: '600px'
                }}

            >
                <div>
                    <RemoveIcon onClick={() => buttonHandler('-')} />
                </div>
                <div>
                    {lifeCount}
                </div>
                <div>
                    <AddIcon onClick={() => buttonHandler('+')} />
                </div>
                <div>
                    <ReplayIcon onClick={refreshHandler}/>
                </div>
            </Box>
        </Container>
    )
}