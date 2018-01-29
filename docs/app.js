const container = document.querySelector('.app');
const messages = [];

const updateMessages = (message) => {
  const allMessages = messages.push(message);

  const messagesLayout = messages.map(
    message =>  `<li>${ message }</li>`
  );
console.log(container.innerHTML)
  container.innerHTML = messagesLayout.join('');
}

const collectDonatations = () => {
  updateMessages('поиск инвесторов');
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const money = Math.ceil(Math.random() * (6000000 - 4000000)) + 4000000;
      const failMessage = 'Собранных грошей не хватает на оплату хостинга, мать выгоняет вас гулять на воздух';
      
      Math.random() > .5 ? resolve(money) : reject(failMessage);
    }, 1000);
  });
  
    return promise;
  };
  
  const goStocks = (money) => {
    updateMessages(`токены разлетаются как горячие пирожки, вы не знаете куда девать $ ${ money }`);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const successMessage = 'Вот так капитализация! Бегом рекламировать!';
        const failMessage = `$ ${ money } это фонд по вашему? Купите лучше Bitcoin`;
        
        Math.random() > .5 ? resolve(successMessage) : reject(failMessage);
      }, 1000);
    });
  };
  
  const releaseTokens = (money) => {
    updateMessages('Милую сердцу аббревиатуру можно найти на биржах!');
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const successMessage = 'Курс растёт! Платёжные системы, интернет вещей, Big Data, Брокерство! Теперь можно и отдохнуть';
        const failMessage = `Правительство выпускает новый закон и осваивает ваш бюджет. Попробуйте объяснить это инвесторам`;
        
        Math.random() > .5 ? resolve(successMessage) : reject(failMessage);
      }, 1000);
    });
  };
  
  const flyToGoa = () => {
    updateMessages('Заказываем билеты в ГОА!');
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const successMessage = 'Вы проживаете богатую и счастливую старость. Ваше имя стало ругательством';
        const failMessage = `Как это пирамида? Как это задержан в аэропорту? 
          надо было нанаять <a href="https://www.google.ru/search?q=tokenization+lawyer&oq=tokenization+lawyer&aqs=chrome..69i57j69i60l3.630j0j4&sourceid=chrome&ie=UTF-8">юриста по токенизации</a> ...`;
        
        Math.random() > .5 ? resolve(successMessage) : reject(failMessage);
      }, 1000);
    });
  };
  
  collectDonatations()
    .then(goStocks)
    .then(releaseTokens)
    .then(flyToGoa)
    .then(updateMessages)
    .catch(fail => updateMessages(fail));