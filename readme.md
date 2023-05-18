# Dockerizing MongoDB & Node Js

- Build mongodb docker image from the Dockerfile:

```bash
cd mongodb

docker build -t my-mongodb .
```

- Run the mongodb container and map the port `6969` with port `27017` of the container:

```bash
docker run -d --name MyMongoDB -p 6969:27017 my-mongodb
```

- Run the node js app to test:

```bash
cd node

npm install
npm run dev
```
