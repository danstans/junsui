import * as p from "@clack/prompts";
import {
  CONFIG_FILE_NAME,
  type Config,
  writeConfig,
} from "../config/junsui-config";

const getInitialConfig = async (): Promise<Config> => {
  const config = await p.group(
    {
      cssFramework: () =>
        p.select({
          message: "Which Junsui theme would you like to use?",
          options: [
            { value: "Kyoto", label: "Kyoto" },
            { value: "Tokyo", label: "Tokyo" },
            { value: "NeoTokyo", label: "NeoTokyo" },
          ],
          initialValue: "panda",
        }),
      jsFramework: () =>
        p.select({
          message: "Which JavaScript framework do you use?",
          options: [
            { value: "react", label: "React" },
            { value: "solid", label: "Solid" },
            { value: "vue", label: "Vue" },
          ],
          initialValue: "react",
        }),
      importAliasComponents: () =>
        p.text({
          message: "What is your import alias for components?",
          initialValue: "~/components/ui",
        }),
      importAliasUtils: () =>
        p.text({
          message: "What is your import alias for utilities?",
          initialValue: "~/lib",
        }),
      useServerComponents: ({ results }) => {
        const isReact = results.jsFramework === "react";
        if (!isReact) return Promise.resolve(false);
        return p.confirm({
          message: "Do you want to use React Server Components?",
        });
      },
      confirm: () =>
        p.confirm({
          message: `Would you like to write the configuration to ${CONFIG_FILE_NAME}?`,
        }),
      outro: async () =>
        p.note(
          "Run `npx @junsui/cli add button` to add your first component.",
          "🚀 You're all set now. Happy hacking!"
        ),
    },
    {
      onCancel: () => {
        p.cancel("Operation cancelled.");
        process.exit(0);
      },
    }
  );

  return {
    $schema: "https://park-ui.com/schema.json",
    cssFramework: config.cssFramework as "panda" | "tailwind",
    jsFramework: config.jsFramework as "React" | "Solid" | "Vue",
    importAliases: {
      components: config.importAliasComponents,
      utils: config.importAliasUtils,
    },
    // @ts-ignore typeguard needed because of jsFramework if/then in config schema
    useReactServerComponents: config.useServerComponents,
  };
};

// const getUtils = async () => {
//   const spinner = p.spinner()
//   spinner.start(`Start to add helpers...`)
//   await addUtils()
//     .catch((error) => {
//       spinner.stop(`Failed to download utils. ${error.message}`)
//       process.exit(1)
//     })
//     .then(() => {
//       spinner.stop(`Done.`)
//       process.exit(0)
//     })
// }

export const initCommand = async () => {
  p.intro("Welcome to Park UI!");
  const config = await getInitialConfig();
  writeConfig(config);

  //   await getUtils()
};
