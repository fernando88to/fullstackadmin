# FullStack Admin

Projeto de Estudo do material ui

### Link do curso 

* https://www.youtube.com/watch?v=0cPCMIuDk2I&t=1752s

### Código fonte completo do curso

* https://github.com/ed-roh/fullstack-admin

### Gerador de paleta de cores

No visual studio code instala a extensão 'Taildwind shades', depois escreve uma cor, seleciona
ela e faz na sequência os seguintes atalhos 'ctrl+k' e 'ctrl+g'.


### Configuração da fonte

https://nextjs.org/blog/next-13#nextfont

### Dependências do material ui


npm i --save @emotion/cache @emotion/react @emotion/server @emotion/styled @mui/icons-material @mui/material


### Para fazer

* Tela de visualização dos segmentos em formato de cards
* Update de de atualização dos segmetos juntamente com update nos cartórios
* Tela de visualização das cidades

### COnfiguração do OAuth2 do google

1. Acessar https://console.developers.google.com/apis/credentials
2. Criar um projeto
3. Configura tela de permissão oath para o projeto
4. Criar uma credencial  do tipo OAuth 2.0
5. Na configuração 'Origens JavaScript autorizadas' adicionar a url 'http://localhost:3000'
6. Na configuração 'URIs de redirecionamento autorizados' adicionar a url 'http://localhost:3000/api/auth/callback/google'
7. Copiar as CLIENT_ID e CLIENT_SECRET
