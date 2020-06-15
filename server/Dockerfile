FROM node:lts

ENV PROJECT_ROOTDIR /
WORKDIR $PROJECT_ROOTDIR

COPY package.json $PROJECT_ROOTDIR
RUN yarn install
COPY . $PROJECT_ROOTDIR

RUN yarn run build
CMD ["yarn", "run", "production"]
