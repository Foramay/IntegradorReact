import Noticia from "./Noticia"

const NoticiaList = ({noticias}) => {
    return noticias.map((noticia) => {
        return <Noticia noticia={noticia}/>
    })
}


export default NoticiaList;