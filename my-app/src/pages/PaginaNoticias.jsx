import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import NoticiaList from "../components/Noticia/NoticiaList";
import PaginationOutlined from "../components/Pagination/Pagination";
import { getNoticiasServer } from "../service/noticiasJson";
import './PaginaNoticia.css'

const PaginaNoticias = () =>{
    const onBuscar = async (buscadorNoticias) => {
        const news = await getNoticiasServer(buscadorNoticias);
        console.log(news);
      }
    
    return (<main className="container-page-noticia">
                <Navbar/>
                <Buscador onBuscar={onBuscar}/>
                <Loading/>
                <NoticiaList/>
                <PaginationOutlined/>
            </main>
        )
}

export default PaginaNoticias;