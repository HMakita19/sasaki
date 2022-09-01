// ヘッダー呼び出し
function include_header(rootDir){
  $.ajax({
      url: rootDir + "header.html",  // 読み込むHTMLファイル
      cache: false,
      async: false,
      dataType: 'html',
      success: function(html){
          html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
          document.write(html);
      }
  });
}

// フッター呼び出し
function include_footer(rootDir){
  $.ajax({
      url: rootDir + "footer.html",  // 読み込むHTMLファイル
      cache: false,
      async: false,
      dataType: 'html',
      success: function(html){
          html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
          document.write(html);
      }
  });
}