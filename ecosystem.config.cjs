# ============================================================================
# PM2 Ecosystem Configuration for Kinpai Sushi Web
# 
# Use: pm2 start ecosystem.config.cjs
# Monitor: pm2 monit
# Logs: pm2 logs
# ============================================================================

module.exports = {
  apps: [
    {
      name: "kinpai-web",
      script: "./dist/index.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "logs/pm2-error.log",
      out_file: "logs/pm2-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_memory_restart: "1G",
      node_args: "--max-old-space-size=1024",
      watch: false,
      ignore_watch: ["node_modules", "logs", "dist/public"],
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
  
  // Deploy configuration
  deploy: {
    production: {
      user: "ubuntu",
      host: "your-server-ip",
      ref: "origin/main",
      repo: "git@github.com:your-repo/kinpai-web.git",
      path: "/home/ubuntu/kinpai-web",
      "post-deploy": "pnpm install && pnpm run build && pm2 reload ecosystem.config.cjs --env production",
    },
  },
};
