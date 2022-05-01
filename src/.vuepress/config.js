const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Rovel Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#7289da' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'og:image', content: 'https://cdn.discordapp.com/attachments/775220204699385886/775220344688214016/images_1.jpeg' }],
    ["script async", { src: "https://arc.io/widget.min.js#TX4pHycR" }],
    ["script", { src: "https://embed.runkit.com" }],
    ["script", {src: "https://docs.rovelstars.com/console.js"}],
  ],

  /**
   * <script src="https://kit.fontawesome.com/4997c612d8.js" crossorigin="anonymous"></script>
   * <script src="http://brainshop.ai/api/aco.js?bid=154180&key=wE3UDL25F1IX6jt6"></script>
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'yuu',
  themeConfig: {
    repo: 'rovelstars/docs',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Discord Server',
        link: 'https://discord.gg/953XCpHbKF'
      },
      {
        text: 'Rovel.js',
        link: '/rjs/'
      },
      {
        text: 'Rovel.js - Plugins',
        link: '/rjs-plugins/'
      },
      {
        text: 'Rovel Discord List',
        link: '/rdl/'
      },
    ],
    sidebar: {
      '/rjs/': [
        {
          title: 'Rovel.js',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/rjs-plugins/': [
        {
          title: 'Rovel.js - Plugins',
          collapsable: true,
          children: [
            '',
            'api-npm',
            'cli',
            'env',
            'approx',
            'colors',
            'emoji',
            'fetch',
            'netspeed',
            'supports-colors',
            'pkgjs'
          ]
        }
      ],
      '/rdl/': [
        {
          title: 'Rovel Discord List',
          collapsable: true,
          children: [
            '',
            'api',
            'api/bots'
          ],
        }
      ],
    }
  },

  markdown: {
    lineNumbers: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    'markdown',
    {
      extendMarkdown: md => {
        md.use(require('markdown-it-task-lists'))
      }
    },
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'sitemap',
      { hostname: 'https://docs.rovelstars.com' },
    ],
    'code-switcher',
    'vuepress-plugin-code-copy',
  ]
}
