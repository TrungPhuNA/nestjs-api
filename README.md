ON job
sudo ./svc.sh install
sudo ./svc.sh start


PM2
- pm2 start dist/main.js --name "nestjs-api"
