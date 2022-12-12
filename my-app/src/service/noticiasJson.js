const NEWS_API = 'https://newsapi.org'
const API_KEY = '6557b35dc78a47fc97d85d390910220d'

//https://newsapi.org/v2/everything?q=bitcoin&apiKey=6557b35dc78a47fc97d85d390910220d&page=1&pageSize=10

export const getNoticiasServer = async (buscadorNoticias, paginaActual) => {
    const respuesta = await fetch(`${NEWS_API}/v2/everything?q=${buscadorNoticias}&apiKey=${API_KEY}&page=${paginaActual}&pageSize=10&language=es`);
    const noticias = await respuesta.json();
    return noticias;
}