//new component
var News = React.createClass({
  render: function() {
    return (
      <div className="news">
      К сожаления, новостей нет.
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
        </div>
      );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);