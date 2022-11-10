#!/bin/bash

# download node and npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

# curl -sL https://rpm.nodesource.com/setup_lts.x | bash -
# yum install nodejs -y #default-jre ImageMagick

# install pm2 module globaly
npm install -g pm2
pm2 update



#!/bin/bash
# cd /home/ec2-user/express-app/app.js
# sudo pkill -f PM2
# sudo pm2 start /home/ec2-user/express-app/app.js 
# sudo pm2 startup
# sudo pm2 save




# delete existing bundle
cd /home/ec2-user/express-app
rm -rf node
pkill -f PM2
pm2 start /home/ec2-user/express-app/app.js 
pm2 startup
pm2 save

#create our working directory if it doesnt exist.
DIR="/home/ec2-user/express-app"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR} 
fi 