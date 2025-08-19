This repository contains a versioned curriculum vitae for Marian Focșa (yours truly).

The CV is also available at [cv.foxbites.net](https://cv.foxbites.net)

- [Functionality:](#functionality)
- [Tech Stack](#tech-stack)
- [Documentation](#documentation)
  - [Application structure](#application-structure)
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

- `/app/data/portfolio.ts` - static data source which is used to store CV data and render it with React
- `/public/js`, `/public/css` - custom preloaded scripts that are not integrated with React
- `/public/img` - images, logos, some of them with dual versions - one small (thumbnail), other large which is lazyloaded
- `/public/files` - contains the EUROPASS style PDF  of the CV
- `*docker*` files - scripts to build the docker image, deploy it with compose
- `Jenkinsfile` - script that runs on jenkins, which uses a SSH agent that connects to docker (DooS) and is able to run the application (only does so from master)

### Caveats

This website has been migrated from a singular, plain HTML+JS+CSS version. Some of the scripts used in the initial version are not migrated yet, and are loaded and executed async in the application's main page. There is a plan to migrate it, but it will be completed when the time is right.