import { Glob } from 'bun'
import { findUpSync } from 'find-up'
import fs from 'fs-extra'
import Handlebars from 'handlebars'
import path from 'node:path'
import v from 'voca'

type Options = {
  jsFramework: 'react' | 'solid' | 'vue'
}

Handlebars.registerHelper('eq', (a, b) => a === b)
Handlebars.registerHelper('titleCase', v.titleCase)

const rootDir = path.dirname(findUpSync('bun.lockb') ?? '')
const pascalCase = (s: string) =>
  v
    .chain(s)
    .camelCase()
    .capitalize()
    .value()
    .replace(/([A-Z])/g, ' $1')
    .trim()

const generateIndex = async (options: Options, scannedFiles: string[], cwd: string) => {
  const { jsFramework } = options

  const content = JSON.stringify({
    components: scannedFiles.sort().map((component) => ({
      name: pascalCase(path.parse(component).name),
      href: `https://junsui.com/registry/${jsFramework}/components/${
        path.parse(component).name
      }.json`,
    })),
  })

  await fs.outputFile(
    path.join(rootDir, 'docs', 'public', 'registry', jsFramework, 'components', 'index.json'),
    content,
  )
}

const resolveComponents = async (options: Options, scannedFiles: string[], cwd: string) => {
  const { jsFramework } = options

  await Promise.all(
    scannedFiles.map(async (component) => {
      const componentName = path.parse(component).name
      const extension = path.parse(component).ext
      const content = fs.readFileSync(`${cwd}/${component}`, 'utf-8')

      const registry = JSON.stringify({
        files: [
          {
            filename: `${componentName}${extension}`,
            content,
            hasMultipleParts: content.includes('createStyleContext'),
          },
        ],
      })

      await fs.outputFile(
        path.join(
          rootDir,
          'docs',
          'public',
          'registry',
          jsFramework,
          'components',
          componentName.concat('.json'),
        ),
        registry,
      )
    }),
  )
}

// const resolveHelpers = async (options: Options) => {
//   const { cssFramework, jsFramework } = options
//   const rootDir = path.dirname(findUpSync('bun.lockb') ?? '')

//   const helpers = await globby([
//     path.join(rootDir, 'components', cssFramework, jsFramework, 'src', 'lib'),
//   ])

//   await Promise.all(
//     helpers.map(async (helper) => {
//       const content = fs.readFileSync(helper, 'utf-8')
//       const data = JSON.stringify({
//         files: [
//           {
//             filename: path.basename(helper),
//             content,
//           },
//         ],
//       })

//       await fs.outputFile(
//         path.join(
//           rootDir,
//           'website',
//           'public',
//           'registry',
//           cssFramework,
//           jsFramework,
//           'helpers',
//           'index.json',
//         ),
//         data,
//       )
//     }),
//   )
// }

const main = async () => {
  const jsFrameworks = ['react', 'solid', 'vue'] as const
  const glob = new Glob('*.{tsx,vue}')

  for (const jsFramework of jsFrameworks) {
    const cwd = `${rootDir}/components/${jsFramework}/components`
    const scannedFiles = await Array.fromAsync(glob.scan({ cwd }))
    await generateIndex({ jsFramework }, scannedFiles, cwd)
    await resolveComponents({ jsFramework }, scannedFiles, cwd)
    // await resolveHelpers({ cssFramework, jsFramework })
  }
}

main()
