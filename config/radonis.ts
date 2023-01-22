import Application from "@ioc:Adonis/Core/Application";
import type { RadonisConfig } from "@ioc:Microeinhundert/Radonis";
import { unocssPlugin } from "@microeinhundert/radonis-unocss";

const radonisConfig: RadonisConfig = {
  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | The registered server plugins. Client plugins are registered
  | separately inside the client entry file.
  |
  */
  plugins: [unocssPlugin()],

  /*
  |--------------------------------------------------------------------------
  | Head
  |--------------------------------------------------------------------------
  |
  | Configuration of the page <head>.
  |
  */
  head: {
    /*
    |--------------------------------------------------------------------------
    | Title
    |--------------------------------------------------------------------------
    |
    | Defaults and general configuration of the page <title>.
    |
    */
    title: {
      /*
      |--------------------------------------------------------------------------
      | Default
      |--------------------------------------------------------------------------
      |
      | The default title value.
      | Views without a title set will fall back to this value.
      |
      */
      default: Application.appName,

      /*
      |--------------------------------------------------------------------------
      | Prefix
      |--------------------------------------------------------------------------
      |
      | A string to prefix the title with.
      |
      */
      prefix: "",

      /*
      |--------------------------------------------------------------------------
      | Suffix
      |--------------------------------------------------------------------------
      |
      | A string to suffix the title with.
      |
      */
      suffix: "Radonis Example Application",

      /*
      |--------------------------------------------------------------------------
      | Separator
      |--------------------------------------------------------------------------
      |
      | The character separating the title and the prefix / suffix.
      |
      */
      separator: "|",
    },

    /*
    |--------------------------------------------------------------------------
    | Default meta
    |--------------------------------------------------------------------------
    |
    | The default <meta> tags.
    |
    */
    defaultMeta: {
      charSet: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
    },
  },

  server: {
    /*
    |--------------------------------------------------------------------------
    | Streaming
    |--------------------------------------------------------------------------
    |
    | Stream the rendered view to the client instead of
    | waiting for the full view to finish rendering.
    | This will enable Streaming SSR features from React 18.
    |
    */
    streaming: true,
  },

  client: {
    /*
    |--------------------------------------------------------------------------
    | Limit manifest
    |--------------------------------------------------------------------------
    |
    | Limit the client-side manifest to only include data required for hydration.
    | Disable this if you have some use case that requires
    | all data to be available at all times.
    |
    */
    limitManifest: true,

    /*
    |--------------------------------------------------------------------------
    | Build options
    |--------------------------------------------------------------------------
    |
    | Allows overriding the build options used
    | by esbuild for bundling the client.
    |
    | Use with caution: This is only an escape hatch.
    | Overriding the options can break the build.
    |
    */
    buildOptions: {},
  },
};

export default radonisConfig;
