// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

const pageRef = require('./src/plugins/pageRef');

const pageOptions = {
  sidebarCollapsible: true,
  // editUrl: 'https://github.com/PatelN123/Digital-Support-Notes/edit/main/Website/',
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
  beforeDefaultRemarkPlugins: [
    pageRef,
  ],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hi! 我是元玉鹏',
  tagline: "Yuanyp8's wiki",
  url: 'https://yuanyp8.github.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yuanyp8', // Usually your GitHub org/user name.
  projectName: 'yuanyp8.github.io', // Usually your repo name.
  // deploymentBranch: 'master',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [
            [katex, {strict: false}],
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yuanyp8/yuanyp8.github.io/tree/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        blog: {
          blogTitle: " ❤️随笔",
          // blogDescription: "YEE式機器龍各種用肝和 ❤️ 製作的部落格",
          blogSidebarTitle: "博客列表",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/yuanyp8/yuanyp8.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],


  // 自定义
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "life",
        path: "life",
        routeBasePath: "life",
        // sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/yuanyp8/yuanyp8.github.io/tree/master/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
       // include: ['**/*.md', '**/*.mdx',],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "work",
        path: "work",
        routeBasePath: "work",
        // sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/yuanyp8/yuanyp8.github.io/tree/master/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
       // include: ['**/*.md', '**/*.mdx',],
      },
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "yuanyp8, wiki, blog, c, c++, docker, python, linux",
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Yuanyp8 Wiki',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
            // items: [
            //   {
            //     label: "test1",
            //     to: "/test1",
            //   },
            //   {
            //     label: "life",
            //     to: "/life"
            //   },
            // ],
          },


          {to: '/work', label: '📗Work', position: 'left'},
          {to: '/life', label: '🚴Life', position: 'left'},
          {to: '/blog', label: '❤随笔', position: 'left'},
          {
            href: 'https://github.com/yuanyp8/yuanyp8.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '文档',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/yuanyp8/yuanyp8.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yuanyp8's Project, Stay Hungry Stay Foolish.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: 'support_us',
        content:
            '🚀 如果你觉得还不错, 就给一个 ⭐️ Start 吧 ~ <a target="_blank" rel="noopener noreferrer" href="https://github.com/yuanyp8/yuanyp8.github.io/tree/master/">Click here</a> ',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
    }),
};

module.exports = config;
