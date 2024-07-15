import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ITranslator } from '@jupyterlab/translation';
/**
 * Initialization data for the @jupyterlab/in-context-translation extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@jupyterlab/in-context-translation:plugin',
  description:
    'A Jupyter extension to translate the web interface directly within the application.',
  autoStart: true,
  requires: [ITranslator],
  activate: async (app: JupyterFrontEnd, translator: ITranslator) => {
    console.log(
      'JupyterLab extension @jupyterlab/in-context-translation is activated!'
    );

    if (translator.languageCode === 'ach_UG') {
      // @ts-expect-error Unknown _jipt variable
      window._jipt = [['project', 'jupyterlab']];
      // @ts-expect-error Unknown file - as it is download from cdn at build time
      const content = await import('./jipt.js');
      eval(content);
    }
  }
};

export default plugin;
