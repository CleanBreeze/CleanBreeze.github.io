var posts=["2024/09/27/hello-world/","2024/09/27/My-first-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };