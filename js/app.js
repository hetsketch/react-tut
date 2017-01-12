var my_news = [
  // {
  //   author: 'Саша Печкин',
  //   text: 'В четверг, четвертого числа...'
  // },
  // {
  //   author: 'Просто Вася',
  //   text: 'Считаю, что $ должен стоить 35 рублей!'
  // },
  // {
  //   author: 'Гость',
  //   text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  // },
  // {
  //   author: 'Сашка',
  //   text: 'Я не хочу продавать айфоны, я хочу программировать :('
  // }
];

//News component creates Articles
var Article = React.createClass({
  render: function() {
    var author = this.props.data.author,
        text = this.props.data.text;

    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news_text">{text}</p>
      </div>
    );
  }
});


//news component
var News = React.createClass({
  render: function() {
    var data = this.props.data;
    var newsTemplate;
    if(data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            {/*send data to Aritcle*/}
            <Article data={item} />
          </div>
          )
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет.</p>
    }

    return (
      <div className="news">
        {newsTemplate}
        <strong className={data.length > 0 ? '':'none'}>Всего новостей: {data.length}</strong>
      </div>
    );
  }
});

//app component
var App = React.createClass({
  render: function() {
    //add News component to App
    return (
        <div className="app">
        <h3>Новости</h3>
        <News data={my_news}/>{/*added data property*/}
        </div>
      );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);