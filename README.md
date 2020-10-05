# Monorepo Template

This is a a starter to set up easily a monorepo based on **Typescript**.
It is oriented for react apps but you can easily customize it for vue / svelte apps.

# Getting Started

Each root folder has a purpose, they can be renamed for your needs, and if you see some things that could be improved, do not hesitate to submit a _Pull Request_ or to open an issue.

## Folders

- `configurations`
  - All the configuration is there.
    Webpack, Typescript, Babel, jest etc.
    Some things to point out, in the `configurations/webpack` there is multiple folders such as loaders (webpack loaders), plugins (webpack plugins). There are splitted on purpose and set up to respond to different developpement environement. The main benefice is that we have a base config that can then be extended based on the type of app / module you want to do and easily customizable.
- `packages`
- How i see it, and its a personnal preference that you are free to rename or discuss about it, in the monorepo the packages section is about things that will be shared locally in the monorepo or on your private / public npm registry.
- `apps / applications`
  - As the name states this were the applications will be held
- `services`
  - API's and backend stuff
- `views`
- This is usefull if you have a micro-front approach.

## Generators

This template has 4 generators available to easily create a package / view when you you need.
To do so just run the commands:

```shell
# generate a package
$ yarn generate package --name Hooks --org @org

# generate a view
$ yarn generate view --name Hooks --org @org

#generate an app
$ yarn generate app --name Backoffice --org @org
```

the argument `name`is for the name of the folder and `org` is for the workspace name, usually something like `@yourorganisation`.

They Are based on `hygen` !

## Typescript

Typescript config is already quite strict you can set up the configuration in `configurations/typescript`.
