var app = new Vue ({
    el:"#app",
    data:{
        message:"Hello World",
        score:60
    }
});

var changeCoin = new Vue({
    el:"#changeCoin",
    data:{
        ChangeCoin:{
            USACoin:28.5
        }
    }
});

var vueIf = new Vue({
    el:'#app',
    data: {
      message : 'Hello World！',
      loading: false
    }
  })