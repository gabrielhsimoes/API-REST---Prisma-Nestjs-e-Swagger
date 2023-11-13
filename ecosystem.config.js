module.exports = {
    apps: [
      {
        name: 'commerce-server', // Nome do seu aplicativo
        script: 'main.js', // Arquivo principal do seu aplicativo
        cwd: '/app/dist/src', // Diretório de trabalho do aplicativo
        instances: 'max', // Use 'max' para executar várias instâncias com base no número de núcleos da CPU
        autorestart: true, // Reiniciar automaticamente em caso de falha
        watch: true, // Observar por alterações nos arquivos e reiniciar quando necessário (apenas para desenvolvimento)
        max_memory_restart: '1G', // Reiniciar se o uso de memória exceder 1GB
        env: {
          // NODE_ENV: 'production', // Variável de ambiente NODE_ENV
          PORT: 3000, // Porta em que o seu aplicativo irá ouvir
        },
      },
    ],
  };