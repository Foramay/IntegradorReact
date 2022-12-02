import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import Noticia from "../components/Noticia/Noticia";


import PaginationOutlined from "../components/Pagination/Pagination";
import './PaginaNoticia.css'

const PaginaNoticias = () =>{
    return (<main className="container-page-noticia">
                <Navbar/>
                <Buscador/>
                <Loading/>
                <Noticia/>
                <PaginationOutlined/>
            </main>
        )
}

export default PaginaNoticias;