# HomeBroker - Investment Management Application

## Overview

HomeBroker is a full-cycle investment management application built using modern technologies. The application is composed of three microservices: NEST, Next and GO.

This project was developed during the Full Cycle Immersion week.

## Architecture

The HomeBroker application is built using the following microservices:

- NEST: API built with Nest.js and multiple modules, featuring REST and WebSocket endpoints
- Next: Frontend built with NextJs, utilizing Server-Side Rendering (SSR) and Client-Side Rendering (CSR)
- GO: API built with Go for integration of the other two services and Kafka for messaging and service integration

The application uses Kafka for messaging and service integration between microservices. \
The application also features WebSocket communication for real-time updates.

## Technical Details

- Programming languages: TypeScript and Go
- Frameworks: Nest.js, NextJs, and Go standard library
- Databases: MongoDB for data storage and retrieval
- Message Broker: Kafka for messaging and service integration
- WebSocket protocol for real-time updates
- Docker Compose for containerization and deployment

## Architecture Overview

The following diagram provides an overview of the application's architecture:

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
                  |     Kafka (MB)|
                  +---------------+
                         | ^
                         | |
                         v |
                  +---------------+
                  | GO (Business) |
                  +---------------+
```

This diagram provides an overview of the project architecture, highlighting communication between microservices using Kafka messaging and WebServices architectures with REST and WebSocket.

## Using the Application

1. Send requests to the API: `curl -X GET http://localhost:3000/`
2. View logs: `docker-compose logs --follow`
3. Use WebSocket protocol to receive real-time updates:
   - Connect to WebSocket endpoint: `wss://localhost:3001/`

## Contributing

Contributions are welcome! Please submit a pull request with a detailed explanation of changes and benefits.

## Conclusion

HomeBroker is a full-cycle investment management application built using modern technologies, leveraging a decoupled architecture to ensure scalability and fault tolerance. The application’s microservices communicate with each other through a messaging system, specifically Apache Kafka, which enables a decoupled architecture. This allows for easier maintenance, upgrades, and scalability of individual services without impacting the entire application.

To further improve the responsiveness and scalability of the application, reactive programming is used through the RxJS library. RxJS provides a powerful way to handle asynchronous data streams by simplifying the creation of complex event processing pipelines. This allows the application to handle large volumes of data and messages in a more efficient and reactive manner.
