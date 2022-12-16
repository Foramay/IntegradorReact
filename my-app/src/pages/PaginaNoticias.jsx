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
  //Definí un estado para poder saber el total de resultados
  const [totalResultados, setTotalResultados] = useState();
 
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
    //Acá paso el total de resultados
    setTotalResultados(totalResults);
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
              {/*Acá digo que si hay noticias muestro el resultado total */}
              {noticias && <span>El total de resultados es de {totalResultados}</span>}
              {noticias && <NoticiaList noticias={noticias}/>}
              {noticias && <PaginationOutlined cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}/>}
          </main>
      )
}

export default PaginaNoticias;