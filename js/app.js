var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];
//недостоток такого подхода в том, что при каждом вызове setState будет перерисовываться компонент
//в этом суть контролируемого компонента
var TestInput = React.createClass({
  getInitialState: function () {
    return {
      st: ''
    }
  },
  changed: function (e) {
    e.preventDefault();
    this.setState({st: e.target.value});
  },
  clicked: function (e) {
    alert(this.state.st);
  },
  render: function () {
    return (
      <div>
        <input
          className="test-input"
          onChange={this.changed}
          value={this.state.st}
          placeholder="введите значение"
        />
        < button
          className="button"
          onClick={this.clicked}
        >Submit</button>
      </div>
    );
  }
});

//News component creates Articles
var Article = React.createClass({
  propTypes: {
    //field: fieldType
    // data: React.PropTypes.array.isRequired

    //check field in object
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired
    })

  },
  getInitialState: function () {
    return {
      visible: false
    };
  },
  //onclick event handler
  readmoreClick: function (e) {
    e.preventDefault();
    this.setState({visible: true});
  },
  render: function () {
    var author = this.props.data.author,
      text = this.props.data.text,
      bigText = this.props.data.bigText,
    //read value from component state
      visible = this.state.visible;
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        <a href="#"
           onClick={this.readmoreClick}
           className={'news__readmore ' + (visible ? 'none' : '')}>
          Подробнее
        </a>
        <p className={'news__big-text ' + (visible ? '' : 'none')}>{bigText}</p>
      </div>
    );
  }
});

//news component
var News = React.createClass({
  getInitialState: function () {
    return {
      //create new state
      counter: 0
    };
  },
  render: function () {
    var data = this.props.data;
    var newsTemplate;
    if (data.length > 0) {
      newsTemplate = data.map(function (item, index) {
        return (
          <div key={index}>
            {/*send data to Aritcle*/}
            <Article data={item}/>
          </div>
        )
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет.</p>
    }

    return (
      <div className="news">
        {newsTemplate}
        <strong
          className={data.length > 0 ? '':'none'}
          onClick={this.increment}>
          Всего новостей: {data.length}
        </strong>
      </div>
    );
  }
});

//app component
var App = React.createClass({
  render: function () {
    //add News component to App
    return (
      <div className="app">
        <TestInput />
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