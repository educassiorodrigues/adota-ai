# Plano de estudos engenharia

### Aplicação NextJS, desenvolvimento front e back

A proprosta para esse plano de estudos é a criação de uma aplicação em NextJS, englobando front e back (opcional) desde o zero até sua publicação. Para esse projeto iremos utilizar um site de adoção de cachorros como tema.

### Passo 1: Criação e estruturaçao do projeto NextJS 

### Passo 2: Criaçao das telas. 

Sugestão de telas:

- Dashboard listando os cachorros disponiveis pra adoção; Listar todos os cachorros em cards, trazendo a foto e o nome do mesmo. Ao clicar no card do cachorro, redirecionar para outra página e trazer os detalhes do mesmo; Essa tela vai contar com um botão também para adicionar novos cachorros, que irá redirecionar para a tela de cadastro de cachorro;
- Detalhes do cachorro: tela com as informações do cachorro, essa tela pode ser a mesma do cadastro de cachorros pra economizar tempo, só com os campos desabilitados;
- Novo cachorro: tela com os campos para adicionar um cachorro
- Tela com carrinho para adicionar cachorros que quero adotar e campos para informar nome, email e telefone de quem está adotando
- Tela final apos finalizado com o resumo dos detalhes da adoção de um ou mais cachorros

### Passo 3: Criação de testes

### Passo 4: Documentação

### Passo 5: Opcional - Responsividade

### Passo 6: Opcional - Criação da API para ser consumida pela aplicação. 

A API deve conter:

- Uma rota para cadastrar, buscar, editar e deletar um cachorro;
- Uma rota para pedir a adoção do cachorro (ou cachorros); Quando chamada deve alterar o(os) cachorro(s) para isAdopted = true 
- Uma rota para trazer os detalhes da adoção;
- Se der tempo uma rota para listar as adoções já realizadas;

Para banco recomendo Mongo ou Supabase. 


### Documentação API

https://dog-adoption-cjvk.onrender.com

Entidades:
``` 
dog: {
    "name": string,
    "color": string,
    "race": string,
    "photo": string // BASE 64 da imagem,
    "gender": number, // ENUM Masculino = 1, Feminino  = 2
    "size": number, // ENUM P = 1, M = 2, G = 3, GG = 4,
    "isAdopted": boolean,
    "tags": string[],
    "description": string
}
```

```
adoption: {
    "dog_ids": number[],
    "adopter_name": string,
    "adopter_email": string,
    "adopter_phone": string,
    "created_at": string
}
```

Rotas:
```
GET /dogs → Retorna todos os cachorros.
GET /dogs?isAdopted=true → Retorna apenas cachorros adotados.
GET /dogs?isAdopted=false → Retorna apenas cachorros não adotados.
POST /dogs: Adiciona um novo cachorro.
GET /dogs/:id : Busca um cachorro específico pelo ID.
PUT /dogs/:id : Edita um cachorro específico pelo ID.
DELETE /dogs/:id : Deleta um cachorro específico pelo ID.
POST /adoptions: Cria uma nova solicitação de adoção.
GET /adoptions: Lista todas as adoções.
GET /adoptions/:id : Busca uma adoção específica pelo ID.
```