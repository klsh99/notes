const navConf = require('../../config/navConf.js');
const pluginConf = require('../../config/pluginConf.js');
const sidebarConf = require('../../config/sidebarConf.js');
const headConf = require('../../config/headConf.js');

module.exports = {
    lang: 'zh-CN',
    title: 'MyNote',
    description: 'My Note balabala...',
    // base: '/v2/',  // 部署时如果地址是：https://192.168.1.20/v2  这里的路径就要写为 /v2/ 如果是 / 就需要注释此项。
    head: headConf,
    plugins: pluginConf,

    themeConfig: {
        logo: '/favicon.svg',

        docsDir: 'docs',

        navbar: navConf,

        sidebar: sidebarConf,
        sidebarDepth: 0,

        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        tip: '提示',
        warning: '注意',
        danger: '警告',

        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
          ],
        backToHome: '返回首页',

        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',

        themePlugins: {
            externalLinkIcon: false,
        },
        
    },

    markdown: {
        // extractHeaders: {
        //     level: [2,3,4,5],
        // },
        toc: {
            level: [2,3,4,5],
        },
        code: {
            lineNumbers: false
        },
        
    },

}
   
