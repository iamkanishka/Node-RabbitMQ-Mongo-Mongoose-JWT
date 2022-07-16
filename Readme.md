
<div style=" display: flex;
    justify-content: center">
  <a href="http://nestjs.com/" target="blank"><img src="https://pbs.twimg.com/profile_images/1223261138059780097/eH73w5lN_400x400.jpg" hieght="20%" width="20%" alt="RabbitMQ" /></a>
  <a href="https://nodejs.org/" target="blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" hieght="20%" width="20%"  alt="NodeJS" /></a>

  <a href="https://mongoosejs.com/" target="blank"><img src="https://cms-assets.tutsplus.com/uploads/users/34/posts/29527/preview_image/mongoose.jpg" hieght="20%" width="20%"  alt="Mongooose Logo" /></a>

</div>
# Node-RabbitMQ-Mongo-Mongoose-JWT

Its a Simple E-commerce based backend Applicatoion with RabbitMQ Integration

To Start with this  Node-RabbitMQ-Mongo-Mongoose-JWT Impelemenatted Project, Please start with Following Steps

Note:- Before Starting with this Project, Please make sure you have installed latest stabled version of [Nodejs](https://nodejs.org/en/)  and [Docker](https://www.docker.com/)  Application in your System 


## What I Learnt
1. Integration of RabbitMQ with NodeJS to Create Microservice Application
2. Creating Channel and Passing Data as Buffer and Acknowledging the Channel 
3. Micro-Communication between the Two servers, with rabbitMQ Server 

## Follow the Below Steps


Clone the project

```bash
  git clone https://github.com/iamkanishka/Node-RabbitMQ-Mongo-Mongoose-JWT
```

Go to the project directory

```bash
  cd Auth-Service, Order-Service, Product Service
```

Install dependencies

```bash
  npm install
```
Before Running the Product and Order App, Please make sure to run the Following Docker Command to run teh RabbitMQ Server

```bash
  docker run -p 5672:5672 rabbitMQ
```


if you feel like you need updated versions of the dependencies, then run
```bash
  npm update
```


Start the server

```bash
  npm run start
```

## Follow the Below Link to know detailed Steps and Info
https://medium.com/@kanishkanaik/integrating-rabbitmq-in-nodejs-for-e-commerce-app-with-mongodb-microservices-architecture-b5223d3e0be6






