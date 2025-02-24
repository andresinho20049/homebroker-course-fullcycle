# HomeBroker - Aplicação de Gerenciamento de Investimentos
[![en](https://img.shields.io/badge/lang-en-blue.svg)](https://github.com/andresinho20049/homebroker-course-fullcycle/blob/main/README.md)

## Visão Geral
HomeBroker é uma aplicação de gerenciamento de investimentos que cubra todo o ciclo, construída com tecnologias modernas. A aplicação é composta por três microserviços: NEST, Next e GO.
Este projeto foi desenvolvido durante a semana de Imersão Full Cycle.

## Arquitetura

A aplicação HomeBroker é construída com base nos seguintes microserviços:
- NEST: API construída com Nest.js e múltiplos módulos, contendo pontos de extremidade REST e WebSocket
- Next: Front-end construído com NextJs, utilizando Renderização de Servidor (SSR) e Client-Site (CSR)
- GO: API construída com Go para integração dos outros dois serviços e Kafka para mensagens e integração de serviços

A aplicação utiliza Kafka para mensagens e integração entre serviços. 
A aplicação também disponibiliza comunicação WebSocket para atualizações em tempo real.

## Detalhes Técnicos
- Linguagens de programação: TypeScript e Go
- Frameworks: Nest.js, NextJs e biblioteca padrão do Go
- Bancos de dados: MongoDB para armazenamento e recuperar dados
- Cliente de Mensagens: Kafka para mensagens e integração de serviços
- Protocolo WebSocket para atualizações em tempo real
- Compose Docker para containerização e deploy

## Visão Geral da Arquitetura
O diagrama a seguir fornece uma visão geral da arquitetura da aplicação:
```
                 +---------------+
                 |Next (Frontend)|
                 +---------------+
                 |               |
                 |               |
                 v               v
        +---------------+  +---------------+
        | WebSocket (WS)|  |  REST (HTTP)  |
        +---------------+  +---------------+
                      |      |
                      |      |
                      v      v
                  +---------------+       +---------------+
                  |  NEST (API)   | ----> |    MongoDB    |
                  +---------------+       +---------------+
                         | ^
                         | |
                         v |
                  +---------------+
                  |   Kafka (MB)  |
                  +---------------+
                         | ^
                         | |
                         v |
                  +---------------+
                  | GO (Business) |
                  +---------------+
```
Esse diagrama fornece uma visão geral da arquitetura do projeto, destacando a comunicação entre os microserviços usando mensagens Kafka e arquieteturas de Serviços Web com REST e WebSocket.

## Como começar:
Para instalar o projeto, siga os seguintes passos:
1. **Clone o repositório:** \
`git clone https://github.com/andresinho20049/homebroker-course-fullcycle && cd homebroker-course-fullcycle`
2. **Execute o Docker Compose:** \
Execute `docker compose up`
3. **Depois de executar todos os serviços, comece o next-frontend:** \
Execute `cd next-frontend && npm run dev`

> **Nota:** A primeira execução pode levantar mais de um minuto devido ao download inicial das imagens.

Uma vez que o projeto esteja executando, você poderá acessá-lo na porta `http://localhost:3000` e começar a testar as características e serviços.

## Contribuindo
Contribuições são bem-vindas! Por favor, envie um pull request com uma explicação detalhada das alterações e benefícios.

## Conclusão
HomeBroker é uma aplicação de gerenciamento de investimentos que cubra todo o ciclo, utilizando tecnologias modernas, na qual a arquitetura decupada garante escalabilidade e tolerância a falhas. Quadros das aplicação se comunicam entre si através de um sistema de mensagens, específicas Apache Kafka, que permite uma arquitetura decupada. 
Isso permite uma manutenção mais fácil, atualizações e escalabilidade de serviços individuais, sem impactar a aplicação inteira.
Para melhorar ainda mais a responsividade e a escalabilidade da aplicação, geringalismo reativo é utilizado através da biblioteca RxJS. RxJS fornece uma forma inteligente de lidar com fluxo de dados assimétrico, simplificando a criação de complexo de tratamento de eventos de fluxo de dados.
Isso permite que a aplicação lidem com grande volume de dados em um jeito mais eficiente e seguro.