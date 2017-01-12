var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

//comment component
var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
      Новостей нет. Комментировать нечего.
      </div>
    );
  }
});

//new component
var News = React.createClass({
  render: function() {
    var data = this.props.data;
    var newsTemplate = data.map(function(item, index) {
      return (
        <div key={index}>
          <p className="news__author">{item.author}:</p>
          <p className="news_text">{item.text}</p>
        </div>
      )
    });

    return (
      <div className="news">
        {newsTemplate}
      </div>
    );
  }
});

//React component
var App = React.createClass({
  render: function() {
    //add News component to App
    return (
        <div className="app">
        Всем привет, я компонент App! Я умею отображать новости.
        <News data={my_news}/>{/*added data property*/}
        <Comments />
        </div>
      );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);