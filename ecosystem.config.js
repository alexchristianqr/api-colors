module.exports = {
  apps: [
    {
      name: 'app-apicolors',
      script: './bootstrap/app.js',
      log_date_format: 'DD-MM-YYYY HH:mm:ss',
      error_file: './logs/error.log',
      out_file: './logs/access.log',
      env: {
        PORT: 8099,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 8099,
        NODE_ENV: 'production',
      },
    },
  ],
}
