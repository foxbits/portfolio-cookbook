This repository contains a versioned curriculum vitae for Marian Focșa (yours truly).

The CV is also available at [cv.foxbites.net](https://cv.foxbites.net)

- [Tech Stack](#tech-stack)
- [Documentation](#documentation)
  - [Application structure](#application-structure)
  - [Caveats](#caveats)


## Tech Stack

The contents of the website is built with [React](https://react.dev) ([Next.JS](https://nextjs.org)) and some custom libraries on top of it. The standard react workflows and commands are available for it.

The application is deployed with [Docker Compose](https://docs.docker.com/compose/). It is integrated with an automated CI/CD on a private [Jenkins](https://www.jenkins.io) Server, which connects it through [cloudflare](https://www.cloudflare.com/en-gb/) to the publicly hosted website.

## Documentation

### Application structure

Standard next.js app router based structure, with some important mentions:

- `/app/data/portfolio.ts` - static data source which is used to store CV data and render it with React
- `/public/js`, `/public/css` - custom preloaded scripts that are not integrated with React
- `/public/img` - images, logos, some of them with dual versions - one small (thumbnail), other large which is lazyloaded
- `/public/files` - contains the EUROPASS style PDF  of the CV
- `*docker*` files - scripts to build the docker image, deploy it with compose
- `Jenkinsfile` - script that runs on jenkins, which uses a SSH agent that connects to docker (DooS) and is able to run the application (only does so from master)

### Caveats

This website has been migrated from a singular, plain HTML+JS+CSS version. Some of the scripts used in the initial version are not migrated yet, and are loaded and executed async in the application's main page. There is a plan to migrate it, which awaits its time.