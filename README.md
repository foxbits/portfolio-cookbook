This repository contains a versioned curriculum vitae for Marian Focșa (yours truly).

The CV is also available at [connect.foxbites.net](https://connect.foxbites.net)

- [Functionality:](#functionality)
- [Tech Stack](#tech-stack)
- [Documentation](#documentation)
  - [Application structure](#application-structure)
  - [Customization](#customization)
  - [Caveats](#caveats)


## Functionality:
In the rather technical order of appearing in pages:

1. Open Graph integrated metadata for SEO optimization
2. Dynamic Interests animation and connect links
3. Dynamic, lazy loaded image slideshow on home-page
4. Interactive scrolling
5. About me section with surprise links
6. 3 different types of CVs
7. Cards with statistics
8. Skills charts (percentage)
9. Experience timeline with tags and projects links
10. Hobbies cards with surprise links
11. Education timeline with tags and certificate links
12. Portfolio section with 3 types of projects: work, side and learning
13. Contact section with dynamic mailing
14. Footer with source code
15. Other goodies

## Tech Stack

The contents of the website is built with [React](https://react.dev) ([Next.JS](https://nextjs.org)) and some custom libraries on top of it. The standard react workflows and commands are available for it.

The application is deployed with [Docker Compose](https://docs.docker.com/compose/). It is integrated with an automated CI/CD on a private [Jenkins](https://www.jenkins.io) Server, which connects it through [cloudflare](https://www.cloudflare.com/en-gb/) to the publicly hosted website.

## Documentation

### Application structure

Standard next.js app router based structure, with some important mentions:

- [`src/app/data/portfolio.ts`](src/app/data/portfolio.ts) - static data source (with comments) which is used to store CV data, which is then rendered with React in the different sections
- [`public/js`](public/js), [`public/css`](public/css) - custom preloaded scripts and CSS that are not integrated with React, loaded in the [`src/app/app-client-layout.tsx`](src/app/app-client-layout.tsx) and in [`src/app/page.tsx`](src/app/page.tsx)
- [`public/img`](public/img) - images, logos, some of them with dual versions - one small (thumbnail), other large which is lazyloaded
- [`public/files`](public/files) - can contain any file, recommended to keep other versions of the CV, like EUROPASS PDF, then linked in the Profile section
- [`Dockerfile`](Dockerfile), [`docker-compose.yml`](docker-compose.yml) - scripts to build the docker image, deploy it with compose (linked to custom [`build-docker.sh`](build-docker.sh) and [`docker-compose.run.sh`](docker-compose.run.sh))
- [`Jenkinsfile`](Jenkinsfile) - script that runs on jenkins, which uses a SSH agent that connects to docker (DooS) and is able to run the application (only does so from master)

### Customization
You can reorder sections as you wish in the [`page.tsx`](src/app/page.tsx).

All the data that is shown on page is defined inside [`src/app/data/portfolio.ts`](src/app/data/portfolio.ts), which has comments on how to use it or customise it.

### Caveats

This website has been migrated from a singular, plain HTML+JS+CSS version. Some of the scripts used in the initial version are not migrated yet, and are loaded and executed async in the application's main page. There is a plan to migrate it, but it will be completed when the time is right.