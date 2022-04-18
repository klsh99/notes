"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rightAnchorPlugin = void 0;
const utils_1 = require("@vuepress/utils");
const rightAnchorPlugin = (options = {}, app) => {
    if (app.env.isDev && app.options.bundler.endsWith('vite')) {
        // eslint-disable-next-line import/no-extraneous-dependencies
        app.options.bundlerConfig.viteOptions = require('vite').mergeConfig(app.options.bundlerConfig.viteOptions, {
            optimizeDeps: {
                exclude: ['ts-debounce'],
            },
        });
    }
    return {
        name: 'vuepress-plugin-right-anchor',
        clientAppRootComponentFiles: utils_1.path.resolve(__dirname, '../client/components/RightAnchor.js'),
        extendsPage: (page) => {
            const { rightAnchor: frontmatterOptions = {} } = page.frontmatter;
            const rightAnchor = {
                ...options,
                ...frontmatterOptions,
                isIgnore: Array.isArray(options.ignore) && options.ignore.includes(page.path),
                expand: {
                    trigger: 'hover',
                    clickModeDefaultOpen: true,
                    ...options.expand,
                    ...frontmatterOptions.expand,
                },
            };
            page.data.rightAnchor = rightAnchor;
        },
    };
};
exports.rightAnchorPlugin = rightAnchorPlugin;
