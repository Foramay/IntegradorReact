import './TotalResults.css'
const TotalResults = (props) => {
    const {totalResultados} = props;
    if (totalResultados===0) {
        return <div className='card-total-results'>
                    <h1 className="total-results">No hay resultados</h1>
                </div>
      } else {
        return <div className='card-total-results-else'>
                    <h1 className="total-results">Estás viendo 10 noticias de <span className='totalresults'>{totalResultados}</span> resultados</h1>;
                </div> 
      }
}
export default TotalResults;