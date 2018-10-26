# Contributing

Issues or requests for features are always welcomed. Just create an issue detailing your request. If you want to contribute fixing a bug, adding a feature or with anything you consider should be part of the library, create a pull request! You have details on how to do it below.

## Issues

Whether it is a bug you found, a feature request you want to make or an idea to share, feel free to create an issue in our [Github repository](https://github.com/davidballester/web3-design-system/issues/new).

And, if it is an issue you found, creating a pull request with your solution for it makes you even more awesome!

## Pull requests

Pull requests are always welcome! To contribute to our project, first, fork the repository and start working from your brand new copy of it!

### Branches

We use [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/) in our repository. That means that we have these main branches we care about!

* `master` the currently release version of the library
* `develop` currently developed version. **This is the one you must use as base**

Any contribution to the project must be a `feature` branch of `develop`.

If you have git-flow installed, just create a new feature branch.

```sh
$ git flow feature start <branch name>
```

If you don't have git-flow, branch from `develop`.

```sh
$ git checkout origin/develop -b <branch name>
```

### Commits

We do care about our commits! Because of that, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/). In fact, we follow the [angular commits guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

So, the rule of thumb is:

1. Make your commits as atomic as possible.
2. Choose the appropriate type and scope.
3. Be concise on the description of the commit (and respect the 72 max characters length)
4. If you feel like it, explain your commit further in the body!

And what about the types? These you have!

* `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* `docs`: Documentation only changes
* `feat`: A new feature
* `fix`: A bug fix
* `perf`: A code change that improves performance
* `refactor`: A code change that neither fixes a bug nor adds a feature
* `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* `test`: Adding missing tests or correcting existing tests

### What you should check

So you think you're done? Cool! Now, let's make sure everything is in place before creating a pull request.

**Tests**

Do not forget to add or modify unit tests. Whether you fixed an issue or added a new feature, having good unit tests is necessary!

```sh
$ npm run test
```

**Linter**

We care about the code too! Make sure it is tidy and clean with eslint:

```sh
$ npm run lint
```

**Docs**

Documentation is important (and hard to maintain, we know)! Be sure to add the bits you consider necessary to the docs or modify the ones affected by your changes.

### Create the pull request

So everything is in place? Awesome! Now, create a pull request and document what you have done as thoroughly as possible. Even add screenshots if you consider them useful! And do not forget to check the CI checks on your branch, they may tell you something you forgot about!

## License

By contributing your code to the [Web3 Design System Github repository](https://github.com/davidballester/web3-design-system), you agree to license your contribution under the MIT license.
