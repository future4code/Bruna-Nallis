import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fqsc1-1.fna.fbcdn.net/v/t1.6435-9/240931704_10219434750919106_8680198298289365060_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGUR3HX7O5kG6WSUo_GjUvg_W9Nk2dww0P9b02TZ3DDQ4bMtxkOw-gtyFYzMzPo4B0&_nc_ohc=GPTL0AawnuQAX-d1fcy&_nc_ht=scontent.fqsc1-1.fna&oh=2f8c1036894b17a33ddf78b07549c427&oe=61A80382" 
          nome="Bruna Golinelli Nallis" 
          descricao="Mestre em Ecologia e Recursos Naturais, especialista em programas de logistica reversa, práticas de campo e  ecologia de comunidades. Atualmente estudo programação Full-Satack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='caixa-menor'>
        <CardPequeno
        imagem='data:image/png;base64,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'
        nome='Email:'
        descricao='bruna.gnallis@gmail.com'
        />
        
        <CardPequeno
        imagem='https://i.pinimg.com/originals/88/bc/00/88bc005a6b728cafbf76668607205b25.jpg'
        nome= 'Endereço: '
        descricao= 'São Carlos-SP'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem='https://cdn.pixabay.com/photo/2020/08/05/13/28/eco-5465473_960_720.png'
          nome="EcoBrasil" 
          descricao="Assistente de campo. Analize e elevantamento de fauna silvestre para implementação de gasoduto" 
        />
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1067508408817983489/NTWuTa5P.jpg" 
          nome="Unesp-Rio Claro" 
          descricao="Professora subistituda de ecologia de comunidades para o curso de ciências biológicas." 
        />

        <CardGrande
          imagem='https://igce.rc.unesp.br/Home/pgr/logo-pgr_unesp.jpg'
          nome='PGR'
          descricao='Estagiária do programa de resíduos sólidos da Unesp-Rio Claro'
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
