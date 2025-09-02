import React, { useState } from 'react';
import "./FaleConosco.scss";


export default function FaleConosco({ sectionRef }) {
  // Armazena os dados
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});

  // Atualizar o estado ao digitar
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Envio do formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const validacaoErrors = {};

    // Nome
    if (!formData.nome.trim()) {
      validacaoErrors.nome = "O nome não pode estar em branco";
    } else if (formData.nome.trim().split(' ').length < 2) {
      validacaoErrors.nome = "Por favor, inclua nome e sobrenome";
    }

    // Email
    if(!formData.email.trim()) {
      validacaoErrors.email = "O email não pode estar em branco";
    } else if (!/\S+@\S+/.test(formData.email)) {
      validacaoErrors.email = "O formato do email é inválido";
    }

    // Assunto 
    if(!formData.assunto.trim()) {
      validacaoErrors.assunto = "O assunto não pode ser branco";
    }

    // Mensagem 
    if(!formData.mensagem.trim()) {
      validacaoErrors.mensagem = "A mensagem não pode estar em branco";
    } else if (formData.mensagem.trim().length < 30){
      validacaoErrors.mensagem = "A mensagem deve ter no mínimo 30 caracteres";
    } else if (formData.mensagem.trim().length > 500) {
      validacaoErrors.mensagem = "A mensagem deve ter no máximo 500 caracteres";
    }

    setErrors(validacaoErrors);

    // Se não houver erros 
    if ( Object.keys(validacaoErrors).length === 0 ) {
      alert('Mensagem enviada com sucesso!');


      // limpa os campos
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
      setErrors({});
    }

  };

  return (
    <section ref={sectionRef} className="fale-section">
      <div className="fale-overlay"></div>

      <div className="container h-100">
        <div className="row align-items-center h-100 gy-4">
          {/* Formulário */}
          <div className="col-md-6 text-white">
            <h2 className="fale-title">Fale conosco</h2>
            <p className="fale-subtitle">
              Restou alguma dúvida ou quer entrar em contato?
            </p>

            <div className="fale-form bg-dark bg-opacity-50 p-4 rounded">
              <h5 className="mb-1">Mande uma mensagem</h5>
              <h3 className="mb-3">Contato direto</h3>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor="nome" className="form-label">Seu nome</label>
                  <input
                    type="text"
                    id="nome"
                    className="form-control"
                    placeholder="Escreva seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    />
                    {errors.nome && <p className='error-message'>{errors.nome}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control mb-3"
                    placeholder="exemplo@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p className='error-message'>{errors.email}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="assunto" className="form-label">Assunto</label>
                  <input
                    type="text"
                    id="assunto"
                    className="form-control mb-3"
                    placeholder="Sobre o que você deseja falar"
                    value={formData.assunto}
                    onChange={handleChange}
                  />
                  {errors.assunto && <p className='error-message'>{errors.assunto}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="mensagem" className="form-label">Mensagem</label>
                  <textarea
                    id="mensagem"
                    className="form-control mb-3"
                    rows="4"
                    placeholder="Detalhe a sua mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                  ></textarea>
                  {errors.mensagem && <p className='error-message'>{errors.mensagem}</p>}
                </div>

                <button type="submit" className="btn btn-light">Enviar</button>
              </form>
            </div>
          </div>

          {/* Slogan */}
          <div className="col-md-6 text-white text-md-end">
            <h1 className="fale-slogan">
              Tecnologia no campo,<br />
              inteligência na decisão
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
