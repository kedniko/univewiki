
# UniveWiki Contributing Guide

Hi! We're really excited that you are interested in contributing to UniveWiki. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](./code-of-conduct.md)
- [Pull Request Guidelines](#pull-request-guidelines)

## Pull Request Guidelines

- Checkout a topic branch from the relevant branch, e.g. `main`, and merge back against that branch.

- If adding a new feature:

  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:

  - Provide a detailed description of the bug in the PR. Live demo preferred.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- Commit messages must follow the [commit message convention](./commit-convention.md) so that changelogs can be automatically generated.

## Development Setup

You will need [pnpm](https://pnpm.io)

After cloning the repo, run:

```sh
# install the dependencies of the project
$ pnpm install
```

### Setup UniveWiki Dev Environment

The easiest way to start testing out UniveWiki is to tweak the UniveWiki docs. You may run `pnpm dev` to boot up UniveWiki documentation site locally, with live reloading of the source code.

```sh
$ pnpm dev
```

After executing the above command, visit `http://localhost:5173` and try modifying the source code. You'll get live update.


::: tip Technologies
This website is built with [UniveWiki](https://vitepress.dev/), [Vue.js 3](https://vuejs.org/) and [UnoCSS](https://unocss.dev/).
:::
