import React  from 'react';
import Navbar from '../../components/navbar';
import './home.css';

function Home() {

  return (
      <> <Navbar/>
        {/* verificar se esta logado para mostrar o texto */}
          <div className="row justify-content-center pt-5 ">
            <h4>Você não está logado para acessar as funções do sistema!</h4>
          </div>
          <div className='row justify-content-center pt-4'>
            <h4>API Imagem do Dia</h4>
          </div>



    </>
  );

}
export default Home;