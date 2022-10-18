<h1 align="center">Desafio BeMobile</h1>
<br>
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/103543739/196267550-a05913fc-044d-4208-a978-9ee2194be065.png">
</p>

<h3 font-size="12px" align="center"> Para um melhor experiência, <br>
aponte a câmera do seu celular com o aplicativo Expo Go instalado </h3>


<h2>PRÉ REQUISITOS:</>
<h3> Linguagem de programação: JavaScript </h3>
<h3> Framework: React Native </h3>
<h3> interface de linha de comando: Expo CLI </h3>
<h3> Emulador: Android Studio </h3>
<h3> Sistema Operacional: Windows </h3>
<h3> Requisições HTTP: Axios </h3>
<h3> Criação da API: Json Server</h3>
<h3> Fonte: Roboto</h3>

<br>

<h2>SOBRE A APLICAÇÃO</h2>

<h3> No Front-end temos uma aplicação simples e  moderna que busca otimizar espaço na tela e trazer 
conforto no momento de utilizar o aplicativo. Como por exemplo: pesquisar e obter resposta de pesquisa 
sem a necessidade de sair da tela e obter informações adcionais do profissionais na lista com apenas um click no card. <br>
Em minha visão, a aplicação dispensa o uso de bibliotecas de animação. 
</h3>
<br>
<h3>No Back-end simulamos uma API utilizando a biblioteca JSON-SERVER que serve para subir API REST's com muita simplicidade
e rapidez e posteriormente consulmi-la utilizando a biblioteca AXIOS que serve para realizar requisições HTTP.
</h3>
<br>

<h2>RODANDO A APLICAÇÃO</h2>
<br>
<h3>Para rodar esta aplicação em sua maquina: </h3>
<h3>No seu terminal execute => git clone https://github.com/alexbr-alves/desafio_beMobile.git </h3>
<h3>Dentro da pasta criada para receber o novo projeto execute => npm install ou yarn install</h3>
<h3>Para iniciar o projeto execute => npm start</h3>
<h3>Para iniciar o emulador android aperte => a </h3>
<h3>Para subri o DATA BASE para o servidos utilize => json-server --watch db.json </h3>

<h3> 
OBS 1: A porta fornecida na minha maquina foi a 3000, 
caso o JSON-SERVER forneça outra substitua em => src/services/api.js
</h3>

<h3>
OBS 2: Para o emulador Android em minha maquina tive que substituir o endereço  fornecido pelo JSON-SERVER 
para o endereço => http://10.0.2.2:3000, caso o axios retorne o erro [AxiosError: Network Error] substitua o endereço 
para o endereço fornecido pelo JSON-SERVER
</h3>






<h2>VIDEO DEMOSTRATIVO</h2>
<br>


https://user-images.githubusercontent.com/103543739/196303496-f0444695-1c7e-433a-acbf-3207d110457c.mp4



