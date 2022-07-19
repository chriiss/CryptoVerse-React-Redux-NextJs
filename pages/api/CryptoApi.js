import axios from 'axios';

export const cryptoHeaderData = axios.get("https://api.coingecko.com/api/v3/global");

export const cryptoData = axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false");