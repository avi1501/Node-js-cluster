module.exports = {
    apps:[{
        name: "EXPRESS APP",
        script: "server.js",
        instance: "MAX",
        autorestart: true,
        exec_mode: "fork",
        watch: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'devlopment'
        },
        env_production:{
            NODE_ENV: 'production'
        }
    }]
}