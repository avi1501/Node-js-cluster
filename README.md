### Node-js Cluster module

To utilise the power of all cores of cpu 

node js cluster setup is needed 

we can create node js Cluster with the help of node js cluster module 

##### Sample demo is in [index.js](github.com/avi1501/Node-js-cluster/index.js) file 

## To Perform Load testting on application

Install artillery (installing as dev-dependencies) (documentation)

```
npm install -D artillery
```

To run loadtest

```
npx artillery quick -n <no of users> -c <no of concurrent req> <url>
```

sample command 

```
npx artillery quick -n 1000 -c 100 http://localhost?number=10
```
