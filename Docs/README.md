
Learning GRPC

Protocol Buffers

https://developers.google.com/protocol-buffers

Raw Node.JS

https://app.pluralsight.com/course-player?clipId=2c746f61-2db6-42e4-ab8a-02968c4989f6
https://codelabs.developers.google.com/codelabs/cloud-grpc/index.html#3

NestJs

https://docs.nestjs.com/microservices/grpc
https://github.com/nestjs/nest/tree/master/sample/04-grpc/src

GRPC CLI
```bash
brew install grpcurl
```

GRPC Web UI

https://github.com/fullstorydev/grpcui

https://bionic.fullstory.com/grpcui-dont-grpc-without-it/

```bash
brew install grpcui
```

Protocol Explanations

https://nordicapis.com/when-to-use-what-rest-graphql-webhooks-grpc/#:~:text=the%20end%20client.-,gRPC,RPC%2C%20or%20Remote%20Procedure%20Call.&text=RPC%20gives%20much%20of%20the,remote%20server%20hosting%20the%20resource.


Problems

- Developer Toolset

Due to the nature of gRPC binary encoding streaming, regular HTTP/2 requests are not possible with
tools like Postman or cURL. There is a rich community of APIs for this protocol, so there is likely
some research

- Complexity

gRPC lifecycle, and the transport protocol - protocol buffers - is wholly new to rigup.
it may not be a good idea to set up over HTTP/REST or simple GQL.

```bash 
grpcui --plaintext -import-path ./pokemon-microservice/src/protos/ -proto pokemon.proto localhost:5000
```
