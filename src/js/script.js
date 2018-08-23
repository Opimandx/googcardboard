/**
 * ·        Она уведомляет пользователя о том, что ему разрешен доступ к сайту и пишет в консоль, что пользователь допущен

3) Написать условие, где будет проверяться, старше ли пользователь 18 лет

·        Если да, то подписан ли он на рассылку. Если всё сходится - вызывается ваша функция
**/


let age = prompt("Сколько вам лет?")
console.log(age)
userCheck(age);
function userCheck(age) {

  if (age == 18) {
    let subscr = confirm('Вы подписаны на рассылку?')
    if (subscr === true) {
      console.log("Welcome")
      alert('Welcome home')
    } else{
    let subscribeMe = confirm('Подписаться на рассылку?')
    alert('Спасибо')
    }


  }
  else {
    console.log('Подрости')
      alert('Подрости')
  }

}
