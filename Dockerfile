#Intructions to create image
FROM node:14.15.4-alpine3.12

RUN apk update && apk add bash

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

CMD ["sh", "+x", "/entrypoint.sh"]

USER node 

WORKDIR /home/node/app

#in terminal actives permition with "chmod +x docker/entrypoint.sh"