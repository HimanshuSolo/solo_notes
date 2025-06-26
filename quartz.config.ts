import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "SOLO NOTES",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Roboto",
        code: "IBM Plex Mono",
      },
      // colors: {
      //   lightMode: {
      //     light: "#faf8f8",
      //     lightgray: "#e5e5e5",
      //     gray: "#b8b8b8",
      //     darkgray: "#4e4e4e",
      //     dark: "#2b2b2b",
      //     secondary: "#284b63",
      //     tertiary: "#84a59d",
      //     highlight: "rgba(143, 159, 169, 0.15)",
      //     textHighlight: "#fff23688",
      //   },

      colors: {
        lightMode: {
          light: "#eff1f5",        // Latte Crust (lightest background)
          lightgray: "#e6e9ef",    // Latte Mantle (slightly darker background)
          gray: "#acb0be",         // Latte Subtext0 (neutral mid-tone gray)
          darkgray: "#737994",     // Latte Overlay0 (darker gray for contrast)
          dark: "#4c4f69",         // Latte Text (primary text color)
          secondary: "#fe640b",    // Latte Peach (vibrant accent)
          tertiary: "#40c057",     // Latte Green (softer accent)
          highlight: "rgba(254, 100, 11, 0.15)",  // Peach with 15% opacity
          textHighlight: "#f4b8e433",            // Latte Flamingo at 20% opacity
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),

      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
