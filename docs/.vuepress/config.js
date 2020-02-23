module.exports = {
  title: '杰哥课堂',
  description: '杰哥出品',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '关于我', link: '/about/' },
      {
        text: '前端教程',
        items: [
          { text: 'JavaScript面向对象', link: '/web/js_oop/' },
          { text: 'Vue2.x快速入门', link: '/web/vue2/' },
          { text: '从零打造前端项目', link: '/web/todolist/' }
        ]
      },
      {
        text: 'PHP教程',
        items: [
          { text: 'MySQL基础', link: '/php/mysql/' },
          { text: 'Laravel5.4快速入门', link: '/php/laravel54/' },
          { text: 'Swoole快速入门', link: '/php/swoole/' }
        ]
      },
      { text: 'B站', link: 'https://space.bilibili.com/263804322' }
    ],
    sidebar: {
      '/about/': [
        {
          title: '关于我',
          collapsable: false,
          children: ['']
        }
      ],
      '/web/js_oop/': [
        {
          title: 'JavaScript面向对象',
          collapsable: false,
          children: [
            '',
            '1-类和对象',
            '2-JS中的类和对象',
            '3-对象的方法',
            '4-对象实例化原理',
            '5-原型初步',
            '6-原型深入'
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      //md.use(require('markdown-it-mark'))

      md.use(require('markdown-it-colors'), {
        primary: '#409EFF',
        success: '#67C23A',
        error: '#F56C6C',
        warning: '#E6A23C',
        info: '#909399'
      })
    }
  }
}
