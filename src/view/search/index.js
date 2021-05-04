import React  from 'react';
import Navbar from '../../components/navbar';
import './search.css';

function Search() {

  return (
      <> <Navbar/>
        {/* verificar se esta logado para mostrar o texto */}
       
        <div class="pt-4 text-center align-items-center"> 
            <h1>Picture of the Day</h1>
            <input type="date" min="1997-06-16" max=""/>
            <div class="error" id="error"></div>             
            <button className="mb-3 btn btn-lg btn-cadastrar mt-5">BUSCAR</button>
            <br/>
            {/* Tag de Texto que vai ter o conteudo escondido depois da busca */}
            <h1 ><a id="presentation" href="https://api.nasa.gov/">API APOD - NASA</a></h1>            
            <div class="picture">
                
                    {/* Tag da Imagem que vai ter a src substituida depois da busca  */}
                <img id="picture" src="" alt=""/>
                {/* Tag de título que vai ter o conteudo substituido depois da busca */}
            </div>    
            <div>
                <h1 class="title" id="title"></h1>
                {/* Tag de lista que vai ter o conteudo substituido depois da busca */}
                <ul>
                </ul>
                {/* Tag de descrição que vai ter o conteudo substituido depois da busca  */}
                <h4 id="description"></h4>
                <p id="explanation"></p>
            </div> 

        </div> 


    </>
  );

}
export default Search;