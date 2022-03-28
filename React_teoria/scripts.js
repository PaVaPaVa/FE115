//// ИСТОРИЯ. ДОБАВЛЕНИЕ. ОТРИСОВКА /////

/* React - javascript библиотека для создания пользовательских интерфейсов. Изобретена в 2011, 
компанией Facebook.
React - это управляемый и переиспользуемый код.
Каждое React придожение имеет как минимум один корневой компонент.
Подключение React подробно рассписано на оф.сайте.
https://ru.reactjs.org/docs/add-react-to-a-website.html

Если кратко, то для создания react компонента необходимо создать, например DIV контейнер и указать
ему id. А также в теге <head> подключить  script-теги react. В последующем мы будем отрисовывать react код
в контейнере с указанным id.

//// Функциональные и классовые компоненты ////

Компоненты создаются либо через функцию, либо через класс. Самый простой вариант создание через функцию.

//// через ФУНКЦИЮ: 

const ReactElement = React.createElement('button', null, 'My button function');
function ReactComponent(){
    return ReactElement
}
ReactDOM.render(React.createElement(ReactComponent), document.getElementById('root'));

//// через КЛАССЫ: 

const ReactElement = React.createElement('button', null, 'My button сlass');
class ReactComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (ReactElement)
    }
}
ReactDOM.render(React.createElement(ReactComponent), document.getElementById('root'))


////////////  JSX синтаксис или формат данных. Что такое Props?  ////////

JSX синтаксис - выглядит как обычный HTML код, но его можно использовать вместо или совместно с react элементамию
Для добавления JSX синтаксиса нужно в head добавить специальный скрипт тег (с сайта react, раздел документация)

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>