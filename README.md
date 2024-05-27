# Angular Authentication Front

## Projeto de Processo de Seleção do Itaú

### Resumo do Projeto:

O presente projeto foi desenvolvido com o objetivo de atender aos requisitos de um processo de seleção promovido pelo Itaú Unibanco. A iniciativa visa demonstrar habilidades e competências técnicas e comportamentais necessárias para a posição em questão, destacando a capacidade de desenvolver soluções eficazes e inovadoras para os clientes do mercado financeiro.

### Apresentação:

Eu sou **Letícia Bernal**, estudante de Tecnologia da Informação, e para desenvolver esse projeto eu usei os computadores do laboratório de informática da Universidade Estado de São Paulo. Esta oportunidade abrirá oportunidade para que eu possa custear meus estudos e comprar um computador para me desenvolver ainda mais como desenvolvedores de software.

LinkedIn: https://www.linkedin.com/in/lelebernal/

### Tecnologias:

- Angular CLI: 16.2.14
- Node: 18.20.3
- Package Manager: npm 10.5.0

### Etapas:

- Fiz a instalação do Node através do site: 
https://nodejs.org/en/download/package-manager

- Validei a instalação, através do prompt, usando o comando:

```
node -v
```

- Validei a versão NPM, através do cmd:

```
npm -v
```

- Fiz a instalação do Angular através de estudos e usei o link: <br>
[https://www.youtube.com/watch?v=-ucX5w8Zm8s&ab_channel=LoianeGroner](https://www.youtube.com/watch?v=xqWovo6Enq0&ab_channel=hcode)

- Fiz usando o NPM que é o gerenciador de pacotes do Node:

```
npm install -g @angular/cli
```

- Para criar o projeto, utilizei o angular cli:

```
ng new angular-authentication-front
```

- Como pacotes, usei os defaults, que foram:

@angular-devkit/architect </br>
@angular-devkit/build-angular <br>
@angular-devkit/core  <br>
@angular-devkit/schematics <br>
@angular/cli <br>
@schematics/angular <br>
rxjs <br>
typescript <br>
zone.js <br>

- Criei os componentes necessários:

```
ng generate component home
ng generate component about
ng generate component password
```

- Para executar o projeto, uso o cli do Angular:

```
ng serve -o
```

A url para acessar local é: <br>
http://localhost:4200/

### Arquitetura AWS:

Para sugerir uma arquitetura eu precisei fazer um estudo e usei vários vídeos e artigos como referência, destaco o link: <br>
https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/patterns/deploy-a-react-based-single-page-application-to-amazon-s3-and-cloudfront.html

![Texto Alternativo](https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/patterns/images/pattern-img/970a9d13-e8a2-44ac-aca5-a066e4be60e8/images/96061e05-8ac8-446e-b1da-baa6fc1cc7b6.png)

- O cliente faz uma requisição que bate no CloudFront
- O serviço Amazon Route 53, será utilizado para configurar o DNS
- E o frontend ficará em um Bucket S3

### Conclusão

Agradeço imensamente a oportunidade que estou tendo de participar desse processo e estou estudando com muita dedicação para conhecer outras abordagens de hospedar apps Angular na AWS e também para aplicar com consistências boas práticas de orientação a objeto, Cleand Code e etc no desenvolvimento dos meus projetos.

<hr>
