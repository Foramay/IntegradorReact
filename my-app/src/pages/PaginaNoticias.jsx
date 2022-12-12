import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import NoticiaList from "../components/Noticia/NoticiaList";
import PaginationOutlined from "../components/Pagination/Pagination";
import { getNoticiasServer } from "../service/noticiasJson";
import './PaginaNoticia.css'

const PaginaNoticias = () =>{
  const [noticias, setNoticias] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cantidadPaginas, setCantidadPaginas] = useState(1);
  
  const [buscadorNoticias, setBuscadorNoticias] = useState("");

  const onBuscar = async (buscadorNoticias, pagina=1) => {
    setIsLoading(true)
    const {articles: news, totalResults} = await getNoticiasServer(buscadorNoticias, pagina);
    setBuscadorNoticias(buscadorNoticias)
    setNoticias(news);
    setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
    setIsLoading(false);

  }

  const onCambioPagina = (pagina) => {
    onBuscar(buscadorNoticias, pagina);
  }
  
  return (<main className="container-page-noticia">
              <Navbar/>
              <Buscador onBuscar={onBuscar}/>
              {isLoading && <Loading/>}
              {noticias && <NoticiaList noticias={noticias}/>}
              {noticias && <PaginationOutlined cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}/>}
          </main>
      )
}

export default PaginaNoticias;