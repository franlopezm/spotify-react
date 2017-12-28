const url = 'https://api.spotify.com/v1/';
const clientId = '54ceda5e055145f689fef81d80325eda';
const headers = new Headers();

// ADD and GET token from spotify API
const addToken = (token) => {
  headers.append('Authorization', 'Bearer ' + token);
}

const getToken = () => {
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http:localhost:3000/callback`;
}


const fetchQuery = (url) => {
  return fetch(url, {headers})
    .then(res => {
      if (!res.ok) {
        return 'error';
      }

      return res.json()
    });
}


const searchArtist = (event) => {
  const artist = event.target.artist.value;
  const urlArtist = `${url}search?type=artist&query=${artist}`

  return fetchQuery(urlArtist);
}


const selectArtist = (event) => {
  const idAlbums = event.target.value;
  const urlAlbums = `${url}artists/${idAlbums}/albums`
  
  return fetchQuery(urlAlbums);
}


const selectAlbum = (event) => {
  const idAlbum = event.target.value;
  const urlAlbum = `${url}albums/${idAlbum}/tracks`
  
  return fetchQuery(urlAlbum);
}


export default {
  addToken,
  getToken,
  searchArtist,
  selectAlbum,
  selectArtist
}