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

  const onBuscar = async (buscadorNoticias) => {
    setIsLoading(true)
    const {articles: news} = await getNoticiasServer(buscadorNoticias);
    setNoticias(news);
    setIsLoading(false)
  }

    console.log(noticias);
    
    return (<main className="container-page-noticia">
                <Navbar/>
                <Buscador onBuscar={onBuscar}/>
                {isLoading && <Loading/>}
                {noticias && <NoticiaList noticias={noticias}/>}
                {noticias && <PaginationOutlined/>}
            </main>
        )
}

export default PaginaNoticias;