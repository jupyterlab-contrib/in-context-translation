# jupyterlab_in_context_translation

[![Github Actions Status](https://github.com/jupyterlab-contrib/in-context-translation/workflows/Build/badge.svg)](https://github.com/jupyterlab-contrib/in-context-translation/actions/workflows/build.yml)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jupyterlab-contrib/in-context-translation/main?urlpath=lab)

A Jupyter extension to translate the web interface directly within the application using [crowdin in-context](https://support.crowdin.com/in-context-localization). It works for both JupyterLab and Notebook.

> [!WARNING]
> This requires a change in JupyterLab: [pending modification](https://github.com/jupyterlab/jupyterlab_server/pull/456).

## Requirements

- A free [crowdin account](https://crowdin.com/)
  - Then join to the [JupyterLab project](https://crowdin.com/project/jupyterlab)
- JupyterLab >= 4.0.0 or Notebook >= 7.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab_in_context_translation
```

## Usage

> [!IMPORTANT]
> Be sure you have created an account on crowdin and joined the JupyterLab project see [Requirements](#requirements).

1. Pick the _pseudo-language_ in the menu _Settings_ -> _Language_
1. Acknowledge to save and reload the page
1. On reload, you will be prompted to pick the language you want to translate JupyterLab into and to log in crowdin
1. Start translating the string highlighted by a red border
   1. Hover the string to translate
   1. Click on the edit button that appear in the top left corner
   1. In the dialog, type the translation
   1. Click on _Save_ button
1. To deactivate the feature, pick another language in the menu _Settings_ -> _Language_

See also the [video](./demo_in_context_translation.mp4) that illustrates
those steps.

https://github.com/user-attachments/assets/bfe0e93b-d55c-4b29-a45e-e82f9aad3757

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab_in_context_translation
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_in_context_translation directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab_in_context_translation
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `@jupyterlab/in-context-translation` within that folder.

### Testing the extension

#### Frontend tests

This extension is using [Jest](https://jestjs.io/) for JavaScript code testing.

To execute them, execute:

```sh
jlpm
jlpm test
```

#### Integration tests

This extension uses [Playwright](https://playwright.dev/docs/intro) for the integration tests (aka user level tests).
More precisely, the JupyterLab helper [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) is used to handle testing the extension in JupyterLab.

More information are provided within the [ui-tests](./ui-tests/README.md) README.

### Packaging the extension

See [RELEASE](RELEASE.md)
