// 启用插件
module.exports = [
    '@vuepress/plugin-search',
    [
        '@vuepress/pwa',
        {
            skipWaiting: true,
        },
    ],
    ['vuepress-plugin-right-anchor', {
        customClass: 'customClass',
        showDepth: 4,
        ignore: [
            '/'
        ],
        expand: {
            trigger: 'click',
            clickModeDefaultOpen: true
        }
    }],
    [
        '@vuepress/container',
        {
            type: 'col2left',
        },
    ],
    [
        '@vuepress/container',
        {
            type: 'col2right',
        },
    ],
    [
        '@vuepress/container',
        {
            type: 'highlight-blue',
        },
    ],
    [
        '@vuepress/container',
        {
            type: 'highlight-orange',
        },
    ],
    [
        '@vuepress/container',
        {
            type: 'highlight-red',
        },
    ],
    [
        '@vuepress/container',
        {
            type: 'highlight-green',
        },
    ],
    [
        '@vuepress/container',
        {
            type: 'highlight-purple',
        },
    ],
    [
        '@vuepress/container',
        {
            type: 'img-grid',
        },
    ],
]