import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import NoticiaList from "../components/Noticia/NoticiaList";


import PaginationOutlined from "../components/Pagination/Pagination";
import './PaginaNoticia.css'

const PaginaNoticias = () =>{
    return (<main className="container-page-noticia">
                <Navbar/>
                <Buscador/>
                <Loading/>
                <NoticiaList/>
                <PaginationOutlined/>
            </main>
        )
}

export default PaginaNoticias;