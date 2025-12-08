interface ServerRequest {
    handle(request: any): void;
}

class BaseServer implements ServerRequest {
    public handle(request: any): void {
        console.log("Handling request!", request);
    }
}

abstract class ServerRequestDecorator implements ServerRequest {
    constructor(protected serverRequest: ServerRequest) {}

    abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
    public handle(request: any): void {
        console.log("Logging request: ", request);
        this.serverRequest.handle(request);

    }
}

class AuthMiddleware extends ServerRequestDecorator {
    public handle(request: any): void {
        if(request.isAuthenticated) {
            console.log("Request is authenticated!")
            this.serverRequest.handle(request);
        } else {
            console.log("Unauthorized access!");
        }
    }
}

const request = {
    isAuthenticated: true,
    body: "Hello"
};

let server: ServerRequest = new BaseServer();

server = new LoggingMiddleware(server);
server.handle(request);