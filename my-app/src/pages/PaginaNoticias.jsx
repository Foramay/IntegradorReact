import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import NoticiaList from "../components/Noticia/NoticiaList";
import PaginationOutlined from "../components/Pagination/Pagination";
import { getNoticiasServer } from "../service/noticiasJson";
import './PaginaNoticia.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from "react";

const PaginaNoticias = () =>{
  const [noticias, setNoticias] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cantidadPaginas, setCantidadPaginas] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagina, setPagina] = useState();
 
  useEffect(() => {
    if(searchParams.get('query')){
      buscarNoticia(pagina);
    }
  }, [searchParams, pagina])
  
  const buscarNoticia = async () => {
    setIsLoading(true);
    const {articles: news, totalResults} = await getNoticiasServer(searchParams.get('query'), pagina);    
    setNoticias(news);
    setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
    setIsLoading(false);
  }

  const onBuscar = (buscadorNoticias) => {
    setSearchParams({query : buscadorNoticias});
  }

  const onCambioPagina = (pagina) => {
    setPagina(pagina);
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