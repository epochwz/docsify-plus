window.$docsify = {
    // 项目信息
    name: 'docsify-plus',
    repo: 'https://github.com/epochwz/docsify-plus',
    // 主页
    homepage: 'README.md',
    // 封面
    coverpage: 'cover.md',
    onlyCover: true,
};

const footerHtml = [
    '<div id="app"></div>',
    '<script src="//unpkg.com/docsify/lib/docsify.min.js"></script>',
].join('');

document.write(footerHtml);