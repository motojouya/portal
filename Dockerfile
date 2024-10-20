FROM node:22.10.0-bookworm-slim

ARG UID
ARG GID
RUN groupadd -g ${GID} portal -f && \
    useradd -m -s /bin/bash -u ${UID} -g ${GID} portal
USER portal

EXPOSE 3000
ENV NODE_ENV=develop
ENV PORT=3000
ENV TZ=Asia/Tokyo
WORKDIR /srv

ENTRYPOINT ["/bin/bash"]

# USAGE
# docker build -t portal:latest . --build-arg UID="$(id -u)" --build-arg GID="$(id -g)" --no-cache
# docker container run -d -it --name portal -p 3000:3000 -v .:/srv portal
# docker container start portal
# docker container stop portal
# docker container exec -it portal bash
