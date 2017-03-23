import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.tvmaze.com/',
  timeout: 1000,
});

export const toTileFormat = (raw) =>
  raw.filter(item => item.show.image)
  .map(item => ({
    id: item.show.id,
    name: item.show.name,
    desc: item.show.genres.join(', '),
    summary: item.show.summary,
    img: (item.show.image || {}).medium,
  }));


export const search = (searchTerm) =>
  axiosInstance.get(`search/shows?q=${encodeURI(searchTerm)}`)
    .then(res => res.data);
