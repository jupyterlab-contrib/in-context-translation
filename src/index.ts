import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the @jupyterlab/in-context-translation extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@jupyterlab/in-context-translation:plugin',
  description: 'A Jupyter extension to translate the web interface directly within the application.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension @jupyterlab/in-context-translation is activated!');
  }
};

export default plugin;
