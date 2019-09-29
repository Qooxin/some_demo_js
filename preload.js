 const preloadImg = (url) => {
    const img = new Image();
    if(img.complete) {
        //图片已经加载过了，可以使用图片
        //do something here
    }
    else {
        img.onload = function() {
            //图片首次加载完成，可以使用图片
            //do something here
        };
    }
    img.src = url;
}

var promiseAll = imgData.map((item, index) => {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        img.onload = null;
        resolve(img);
      };
      img.error = function () {
        reject('图片加载失败');
      };
      img.src = item;
    });
  });

  Promise.all(promiseAll).then(
    function () {
      // 图片全部加载完成，进行下一步
      // todo
    },
    function (err) {
      console.log(err);
    }
  );

