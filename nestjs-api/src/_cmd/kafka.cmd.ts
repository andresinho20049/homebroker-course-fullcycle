import { ConfluentKafkaServer } from '../kafka/confluent-kafka-server';
import { AppModule } from '../app.module';
import { NestFactory } from '@nestjs/core';


async function bootstrapMicroservice() {

    const app = await NestFactory.createMicroservice(AppModule, {
        strategy: new ConfluentKafkaServer({
            server: {
                'bootstrap.servers': 'kafka:9094'
            },
            consumer: {
                allowAutoTopicCreation: true,
                sessionTimeout: 10000,
                rebalanceTimeout: 10000
            }
        })
    })

    await app.listen();
    console.log("Kafka microservice started");
}
bootstrapMicroservice()