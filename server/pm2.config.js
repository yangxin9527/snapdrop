module.exports = {
    apps: [
        {
            name: '快传后端',
            cwd: '/root/code/snapdrop/server',
            script: './index.js',
            env: {
                "PORT": 3332
            },
        },
    ],
};