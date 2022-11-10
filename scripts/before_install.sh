#!/bin/bash

# download node and npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

#create our working directory if it doesnt exist.
DIR="/home/ec2-user/express-app"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
  npm install -g pm2
  pm2 update

  sudo pkill -f PM2
  sudo pm2 start app.js
  sudo pm2 startup
  sudo pm2 save
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR} 
fi 