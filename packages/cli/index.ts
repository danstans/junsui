#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
// import { addComponentsCommand } from './commands/add'
import { initCommand } from './commands/init'
import { getVersion, getVersions, showUpgradeNoteWhenNeeded } from './helpers/version'

const main = async () => {
  const versions = getVersions()
  await yargs(hideBin(process.argv))
    .scriptName('junsui')
    .command('init', 'Initialize a new Junsui project', initCommand)
    // .command('add', 'Add a new component', addComponentsCommand)
    .example('$0 init', 'Initialize a Junsui UI project')
    // .example('$0 add button accordion', 'Add accordion component')
    // .example('$0 add --all', 'Add all available components')
    .describe('init', 'Initialize a Junsui UI project')
    .version(getVersion())
    .demandCommand(1).argv

  await versions.then(showUpgradeNoteWhenNeeded)
}
main()
