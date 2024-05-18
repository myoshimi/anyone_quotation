/** @type {import('prettier').Config} */
// https://zenn.dev/watty/articles/21753b0db9f96d
module.exports = {
    singleQuote: true, // ダブルクオートの代わりにシングルクォートを使用する
    semi: true, // セミコロンアリ
    plugins: [],
    printWidth: 120, // 折り返し幅
    tabWidth: 4, // スペースの単位
    trailingComma: 'all', // 可能な限り末尾にカンマつける
    useTabs: false, // タブの代わりにスペースを使用する
    bracketSpacing: true, // オブジェクトリテラルのブラケット前後にスペースを入れる
};
