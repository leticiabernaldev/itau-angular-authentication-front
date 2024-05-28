# Angular Authentication Front

## Projeto de Processo de Seleção do Itaú

### Resumo do Projeto:

Este projeto foi desenvolvido com o objetivo de atender à premissas de um processo seletivo, promovido pelo Itaú Unibanco. O intuito é demonstrar habilidades, competências técnicas e comportamentais, que são necessárias para a posição, destacando a capacidade de desenvolver soluções eficazes e inovadoras para a empresa.

### Apresentação:

Olá! Me chamo **Letícia Bernal**, tenho 22 anos, sou estudante de Gestão de Tecnologia da Informação na UNICID e estou no 2°semenstre.
LinkedIn: https://www.linkedin.com/in/lelebernal/

### Tecnologias usadas:

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

<img width="5184" alt="aws front (1)" src="https://github.com/leticiabernaldev/itau-angular-authentication-front/assets/170205092/8ae64166-bfb4-44c9-a310-52866ba09862">

- O cliente faz uma requisição que bate no CloudFront
- O serviço Amazon Route 53, será utilizado para configurar o DNS
- E o Frontend ficará em um Bucket S3

### Conclusão

Este template foi baseado em meus breves estudos em API, AWS, aplicação com consistências, boas práticas de orientação a objeto, Cleand Code entre outros...
Desde já, agradeço a oportunidade!

<hr>
