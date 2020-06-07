FROM node:12

WORKDIR /usr/src/app

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
apt-get update && apt-get install --no-install-recommends yarn

COPY package*.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn start