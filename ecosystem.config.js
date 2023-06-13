const cluster = require('cluster')
cluster.schedulingPolicy = 2
// console.log(cluster)
module.exports = {
  apps : [{
        name: "EXPRESS",
        script: "server.js",
        instances: "10",
        // autorestart: true,
        exec_mode: "cluster",
        watch: true,
        max_memory_restart: '2G',
        error_file: "logs/errors.txt",
        out_file: "logs/logs.txt",
        env: {
            NODE_ENV: 'devlopment',
            NODE_CLUSTER_SCHED_POLICY: 'none'
        },
        env_production:{
            NODE_ENV: 'production'
        }
  }]
};
