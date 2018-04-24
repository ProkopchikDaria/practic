window.log = new function(){
  this.page = function(){
      var main = document.createElement('main');
      main.className = 'log';
      main.innerHTML = '<div class = "welcome">' +
          '<h1>Регистрация в Cotogram</h1>'+
          '</div>'+
          '<form name ="logForm" method ="post" id="logForm">' +
          '<div> ' +
          '<label for="login">Логин</label>'+
          '<input type ="text" name ="login">'+
          '</div>'+
          '<div>'+
          '<label for="password">Пароль</label>'+
          '<input type ="text" name ="password">'+
          '</div>'+
          '<input type = "submit" class = "buttonLog" id ="buttonLog" value ="Войти">'+
          '</form>';
      return main;
  }
};