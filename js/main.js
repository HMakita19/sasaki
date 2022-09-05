// ヘッダー呼び出し
// function include_header(){
//   $.ajax({
//       url: '/include/header.html', // リクエストを送信するURLを指定
//       async: false, // 非同期リクエストを無効にする
//   }).done(function(header_html){ // 通信が成功したら
//       document.write(header_html); // herder.htmlを表示する
//   });
// }

// フッター呼び出し
// function include_footer(){
//   $.ajax({
//       url: '/include/footer.html', // リクエストを送信するURLを指定
//       async: false, // 非同期リクエストを無効にする
//   }).done(function(footer_html){ // 通信が成功したら
//       document.write(footer_html); // herder.htmlを表示する
//   });
// }



// header
function include_header(root){
  $.ajax({
      url: root + 'include/header.html', // リクエストを送信するURLを指定
      async: false, // 非同期リクエストを無効にする
  }).done(function(header_html){ // 通信が成功したら
      header_html = header_html.replace(/\{root\}/g, root); // header.htmlの文字列を置き換え

      document.write(header_html); // herder.htmlを表示する
  });
}


// footer
function include_footer(rootDir){
  $.ajax({
      url: rootDir + 'include/footer.html', // リクエストを送信するURLを指定
      async: false, // 非同期リクエストを無効にする
  }).done(function(footer_html){ // 通信が成功したら
      footer_html = footer_html.replace(/\{root\}/g, rootDir); // footer.htmlの文字列を置き換え

      document.write(footer_html); // footer.htmlを表示する
  });
}