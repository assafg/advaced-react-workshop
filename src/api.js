import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.tvmaze.com/',
  timeout: 1000,
});

export const toTileFormat = (raw) =>
  raw.filter(item => item.show.image)
  .map(item => ({
    id: item.show.externals.thetvdb,
    name: item.show.name,
    desc: item.show.genres.join(', '),
    summary: item.show.summary,
    img: (item.show.image || {}).medium,
  }));


export const search = (searchTerm) =>
  axiosInstance.get(`search/shows?q=${encodeURI(searchTerm)}`)
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });

export const showLookup = (showId) =>
  axiosInstance.get(`lookup/shows?thetvdb=${showId}`)
    .then(res => res.data);

export const showCast = (showId) =>
  axiosInstance.get(`shows/${showId}/cast`)
    .then(res => res.data);

export const showActor = (actorId) =>
  axiosInstance.get(`people/${actorId}?embed=castcredits`)
    .then(res => res.data);

export const showActorCastCredit = (actorId) =>
  axiosInstance.get(`people/${actorId}/castcredits?embed=show`)
    .then(res => res.data);
