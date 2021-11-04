import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fqsc1-1.fna.fbcdn.net/v/t31.18172-8/13350272_10206347986358171_6225362326072524439_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGMAoAP1PeSKDcGR2A-_KPP5M0iGkBvPzTkzSIaQG8_NCIblLZ32EXM0H4R7rTq8Xg&_nc_ohc=bbD9sHnwLU4AX8K1fh9&_nc_ht=scontent.fqsc1-1.fna&oh=239dfef809417b441b3ef059b24119f7&oe=61AB7BAF" 
          nome="Bruna Golinelli Nallis" 
          descricao="Sou mestre em Ecologia e Recurso Natural com enfase em ecologia de metacomunidades. Já trabelhei como professora estagiária de Ecologia de Comunidades na Unesp, como assistente de levantamento de fauna silvestre e com programas de logistica reversa. Atualmente estudo programação Full-Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='container-contact'>
      <CardPequeno
      imagem="http://cdn.onlinewebfonts.com/svg/img_237869.png"
      nome='Email: '
      descricao='bruna.labenu@gmail.com'/>
      <CardPequeno
      imagem='https://i.pinimg.com/originals/88/bc/00/88bc005a6b728cafbf76668607205b25.jpg'
      nome= 'Endereço: '
      descricao= 'São Carlos-SP'/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1067508408817983489/NTWuTa5P.jpg" 
          nome="Unesp-Rio Claro" 
          descricao="Professora de ecologia de comunidades para turma de biologia noturna." 
        />
        
        <CardGrande 
          imagem="https://cdn.pixabay.com/photo/2020/08/05/13/28/eco-5465473_960_720.png" 
          nome="Eco-Brasil" 
          descricao="Assistente de levantamento de fauna silvestre." 
        />

        <CardGrande 
          imagem="https://igce.rc.unesp.br/Home/pgr/logo-pgr_unesp.jpg" 
          nome="PGR" 
          descricao="Estagiária responsável pela organização de projetos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
