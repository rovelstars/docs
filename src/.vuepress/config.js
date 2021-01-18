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
    ['meta', { name: 'theme-color', content: '#7289da' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'og:image', content: 'https://cdn.discordapp.com/attachments/775220204699385886/775220344688214016/images_1.jpeg' }],
    ["script", { src: "https://unpkg.com/wc-discord-message@^2.0.0/dist/wc-discord-message/wc-discord-message.js" }],
    ["script", { src: "https://kit.fontawesome.com/4997c612d8.js", crossorigin: 'anonymous' }],
  ],

 /**
  * <script src="https://kit.fontawesome.com/4997c612d8.js" crossorigin="anonymous"></script>
  * Theme configuration, here is the default theme configuration for VuePress.
  *
  * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  */
 themeConfig: {
  repo: '',
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
      }
    ],
  sidebar: {
   '/rjs/': [
    {
     title: 'Rovel.js',
     collapsable: true,
     children: [
            '/',
            'plugins',
            'plugins/api-npm',
            'plugins/cli-help',
            'plugins/env',
          ]
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
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
     [
      'sitemap',
   { hostname: 'https://rovelstars.ga' },
     ],
     'code-switcher',
     'vuepress-plugin-code-copy',
  ]
}