import React, { useState } from 'react';
import './registerImage.css';
import Navbar from '../../components/navbar';

function RegisterImage({ match }) {
    const [msgTipo, setMsgTipo] = useState('');

    const [tittle, setTittle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    return (
        <>
            <Navbar />
            <div className='container-sm'>
                <div className='col-12 text-center'>
                    <h4 className='mx-auto mt-4'>Cadastro de imagem do dia</h4>
                </div>
                <form className="mx-auto">
                    <div className='row form-group '>
                        <div className='col-6 '>
                            <label>Titulo</label>
                            <input onChange={(e) => setTittle(e.target.value)} type='text' className='ml-1 form-control' value={tittle} required />
                        </div>
                        <div className='col-6 '>
                            <label>Autor</label>
                            <input onChange={(e) => setAuthor(e.target.value)} type='text' className='ml-1 form-control' value={author} required />
                        </div>
                    </div>
                    <div className='row form-group '>
                        <div className='col-6 '>
                            <label>Data</label>
                            <input onChange={(e) => setDate(e.target.value)} type='date' className='ml-1 form-control' value={date} required />
                        </div>
                        <div className='col-6 '>
                            <label>Imagem</label>
                            <input onChange={(e) => alert('teste')} type='file' className='ml-1 form-control' value={image} required />
                        </div>
                    </div>
                    <div className='mt-4 mx-auto form-group'>
                        <label>Descrição</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} type='text' className='form-control' value={description} required />
                        <button  className="btn btn-lg btn-cadastrar mt-5" type="button">Registrar imagem</button>
                    </div>
                    
                </form>
                <div className="text-muted text-center my-2">
                    {msgTipo === 'ok' && <spam><strong>Cadastrado com sucesso!</strong></spam>}
                    {msgTipo === 'erro' && <spam><strong>Erro ao cadastrar</strong></spam>}
                    {msgTipo === 'faltaDados' && <spam><strong>Preencha todos os campos</strong></spam>}

                </div>
            </div>

                                    
        </>
    )
}
export default RegisterImage;
