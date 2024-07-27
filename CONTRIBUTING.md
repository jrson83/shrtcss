# Contributing

When contributing to this repository, please make sure to read through these guidelines. Note that no matter how you contribute, your participation is governed by our
[Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents

- [Submit a bug report or feature request](#submit-a-bug-report-or-feature-request)
- [Make changes to the code or docs](#make-changes-to-the-code-or-docs)
- [Develop the docs](#develop-the-docs)
- [Develop packages](#develop-packages)
- [Submit a Pull Request](#submit-a-pull-request)
- [Commit message format](#commit-message-format)

---

## Submit a bug report or feature request

Please use the GitHub [issue tracker](https://github.com/jrson83/shrtcss/issues) to submit bug reports and feature
requests.

### Submission checklist

1. Make sure you are using the [latest version](https://www.npmjs.com/package/shrtcss) of the library
2. Check the [open issues](./?q=is%3Aissue) to ensure you are reporting a new issue

## Make changes to the code or docs

### System requirements

- [pnpm](https://pnpm.io) >= `8.x`
- [Node](https://nodejs.org/en/) `>= 16.14.0`

Your contributions are welcome. Here's our suggested workflow:

1. Fork and clone the repository
2. Run `pnpm install` to install dependencies
3. Create a new branch for each feature, fix or improvement
4. Send a pull request from each feature branch to the **master** branch
   - We use [Husky](https://typicode.github.io/husky) to auto format and lint code on `pre-commit` hook
   - We use standardized commit messages following the [Conventional commit](https://www.conventionalcommits.org) specification. See [Commit message format](#commit-message-format).
5. Continue reading [Develop the docs](#develop-the-docs) or [Develop packages](#develop-packages)

> It is very important to separate new features or improvements into separate feature branches, and to send a
> pull request for each branch. This allows us to review and pull in new features or improvements individually.

Make sure you read and follow the instructions in the [pull request template](.github/pull_request_template.md). And note
that all participation in this project (including code submissions) is
governed by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Develop the docs

Follow the setup instructions at [Make changes to the code or docs](#make-changes-to-the-code-or-docs).

At the workspace `root` run the following command:

```sh
pnpm run dev:react
```

Continue reading [Submit a Pull Request](#submit-a-pull-request).

## Develop packages

If you're making changes to one of the packages that requires a build step (e.g., `core` or `react`), you can setup a watcher in a separate terminal to automatically run the build step whenever files are changed.

```sh
# start the watcher for `core`, `react` & `react-hooks` package
pnpm run dev:react
```

## Submit a Pull Request

Once you're done making the changes, you can now open a pull request (PR). Go to the forked repository in GitHub and select your feature branch. Click the 'Pull Request' button and fill out the form.

While naming your Pull Request, make sure to read the following [commit message guidelines](#commit-message-format).

After staging your changes in git, run the following command at the workspace `root` to start `mini-cz`:

```sh
~~git commit~~

pnpm commit
```

> Do not use `git commit -m <message> / --message=<msg>` flag, instead use the [mini-cz](https://github.com/CreateWheel/mini-cz).

## Commit message format

We use [mini-cz](https://github.com/CreateWheel/mini-cz) to generate standardized commit messages following the [Conventional Commits](https://www.conventionalcommits.org) specification.

### Commit message header

```shell
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: workspace|core|react|react-hooks
  │
  └─⫸ Commit Type: feat|fix|docs|style|refactor|test|chore|perf|build|ci|revert
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional but should be used.

<details>
  <summary>Click here to see a more detailed description on the commit message format.</summary>

#### Type

Must be one of the following:

- **feat:** A new feature
- **fix:** A bug fix
- **docs:** Documentation only changes
- **style:** Changes that do not affect the meaning of the code
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **test:** Adding missing tests or correcting existing tests
- **chore:** Other changes that don't modify src or test files
- **perf:** A code change that improves performance
- **build:** Changes that affect the build system or external dependencies
- **ci:** Changes to our CI configuration files and scripts
- **revert:** Reverts a previous commit

#### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

- `workspace`
- `core`
- `react`
- `react-hooks`

#### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: `change` not `changed` nor `changes`
- don't capitalize first letter
- no dot (.) at the end

#### Body

Just as in the **summary**, use the imperative, present tense: “change” not “changed” nor “changes”. The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

> A detailed explanation of Conventional Commits messages can be found at [Conventional Commits examples](https://www.conventionalcommits.org/en/v1.0.0/#examples).

</details>
