import axios from "axios";

const magicApiUrl = 'https://api.magicthegathering.io/v1/';
const scryfallApiUrl = 'https://api.scryfall.com/';

export async function getCard(name) {
    // Tem vários parâmetros
    try {
        let url = magicApiUrl + `cards?name=${name}`;
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error('getCard: ', error);
        throw error;
    }


}


