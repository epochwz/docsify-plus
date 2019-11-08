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
].join('');

document.write(footerHtml);