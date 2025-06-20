// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "joshIsDev",
  tagline: "lessons will be learned",
  favicon: "img/favicon-x.ico",

  // Set the production url of your site here
  url: "https://joshu.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "joshualent", // Usually your GitHub org/user name.
  projectName: "joshisdev", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "docs",
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/joshualent/joshisdev/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  // Add the plugins section here
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "tutorials",
        routeBasePath: "tutorials",
        path: "./tutorials",
        showReadingTime: false,
        feedOptions: {
          type: ["rss", "atom"],
          xslt: true,
        },
        // Useful options to enforce blogging best practices
        onInlineTags: "warn",
        onInlineAuthors: "warn",
        onUntruncatedBlogPosts: "warn",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "joshIsDev",
        logo: {
          alt: "Sitting Frog icon",
          src: "img/logo-cropped.svg",
          srcDark: "img/logo-cropped-dark.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Wiki",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/tutorials", label: "Tutorials", position: "left" },
          {
            href: "https://github.com/joshualent",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Content",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Tutorials",
                to: "/tutorials",
              },
              {
                label: "Wiki",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/joshualent",
              },
              {
                label: "X",
                href: "https://x.com/joshisfrog",
              },
              {
                label: "Bluesky",
                href: "https://bsky.app/profile/joshisdev.bsky.social",
              },
            ],
          },
          {
            title: "Extras",
            items: [
              {
                label: "LinkedIn",
                to: "/blog",
              },
              {
                label: "Contact",
                to: "mailto:joshualent83@gmail.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/joshualent/personal-site",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joshua Lent.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
