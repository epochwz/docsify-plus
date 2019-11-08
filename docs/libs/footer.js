window.$docsify = {
    // 项目信息
    name: 'docsify-plus',
    repo: 'https://github.com/epochwz/docsify-plus',
    // 主页
    homepage: 'README.md',
    // 封面
    coverpage: 'cover.md',
    onlyCover: true,
    // 导航栏
    loadNavbar: 'navbar.md',
    mergeNavbar: true,
    // 侧边栏
    loadSidebar: 'sidebar.md',
    subMaxLevel: 4,
    autoHeader: true,
    // 全文搜索
    search: {
        maxAge: 86400000, // 过期时间，单位毫秒，默认一天
        depth: 4, // 搜索标题的最大层级
        paths: 'auto',
        placeholder: 'search',
        noData: 'Not Found!'
    },
};

const footerHtml = [
    '<div id="app"></div>',
    '<script src="//unpkg.com/docsify/lib/docsify.min.js"></script>',
    '<!-- 全文搜索 -->',
    '<script src="//unpkg.com/docsify/lib/plugins/search.min.js"></script>',
    '<!-- 图片缩放 -->',
    '<script src="//unpkg.com/docsify/lib/plugins/zoom-image.js"></script>',
    '<!-- 分页导航 -->',
    '<script src="//unpkg.com/docsify-pagination/dist/docsify-pagination.min.js"></script>',
    '<!-- 回到顶部 -->',
    '<script src="//unpkg.com/docsify-scroll-to-top/dist/docsify-scroll-to-top.min.js"></script>',
    '<!-- 代码复制 -->',
    '<script src="//unpkg.com/docsify-copy-code@2"></script>',
    '<!-- 代码高亮 -->',
    '<script src="//unpkg.com/prismjs/components/prism-bash.min.js"></script>',
    '<script src="//unpkg.com/prismjs/components/prism-json.min.js"></script>',
    '<script src="//unpkg.com/prismjs/components/prism-java.min.js"></script>',
    '<script src="//unpkg.com/prismjs/components/prism-javascript.min.js"></script>',
    '<script src="//unpkg.com/prismjs/components/prism-sql.min.js"></script>',
    '<script src="//unpkg.com/prismjs/components/prism-css.min.js"></script>',
].join('');

document.write(footerHtml);