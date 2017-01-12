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
    return (
      <div className="news">
      К сожалению, новостей нет.
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
        Всем привет, я компонент App!
        <News />
        <Comments />
        </div>
      );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);