const API_KEY = 'e3c78a5cca4e3688b69d82279cbe4fc4';

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrend: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
}

export default requests;