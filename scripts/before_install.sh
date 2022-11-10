#!/bin/bash

# # download node and npm
# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
# . ~/.nvm/nvm.sh
# nvm install node


# add nodejs to yum
curl -sL https://rpm.nodesource.com/setup_lts.x | bash -
yum install nodejs -y #default-jre ImageMagick

# install pm2 module globaly
npm install -g pm2
pm2 update





#create our working directory if it doesnt exist.
DIR="/home/ec2-user/express-app"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR} 
fi 