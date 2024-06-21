
import { Container } from '@mui/material';
import LifeCounterComponent from '../components/LifeCounterComponent.jsx'

export default function LifeCounter() {
    return (
        <>
            <LifeCounterComponent isUpsideDown={true} color='red'/>
            <LifeCounterComponent isUpsideDown={false} color='blue'/>
        </>
    );
}