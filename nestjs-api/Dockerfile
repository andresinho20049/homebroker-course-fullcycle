## BASE ##
FROM node:22.13-alpine as base

RUN apk update
RUN apk add --no-cache bash
RUN apk add --update npm
RUN npm install -g npm@11.1.0

ARG WORK_DIR=/opt/app

# Define Workdir for all Stages
WORKDIR $WORK_DIR
#----------------------------------------------------------------

#----------------------------------------------------------------

## BUILDER ##
FROM base as builder

COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build
#----------------------------------------------------------------

#------------------------Final Stage-----------------------------
## RUNNER ##
FROM base as runner
SHELL ["/bin/sh", "-c"]

# dumb-init occupies PID 1 and takes care of all the responsibilities.
RUN apk add dumb-init

ENV NODE_ENV=production

RUN mkdir -p /etc/skel/

RUN echo 'history -c \
    /bin/rm -f /opt/remote/.mysql_history \
    /bin/rm -f /opt/remote/.history \
    /bin/rm -f /opt/remote/.bash_history' >> /etc/skel/.logout

RUN echo 'set autologout = 30 \
    set prompt = "$ " \
    set history = 0 \
    set ignoreeof' >> /etc/skel/.cshrc

RUN cp /etc/skel/.cshrc /etc/skel/.profile

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

RUN chown -R nestjs:nodejs $WORK_DIR
USER nestjs

COPY --from=builder --chown=nestjs:nodejs $WORK_DIR/node_modules $WORK_DIR/node_modules
COPY --from=builder --chown=nestjs:nodejs $WORK_DIR/dist $WORK_DIR/

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

ENTRYPOINT ["/usr/bin/dumb-init", "--"]