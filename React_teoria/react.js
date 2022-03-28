/*
/// Добавление React компонента через функцию 
const ReactElement = React.createElement('button', null, 'My button function');
function ReactComponent(){
    return ReactElement
}
ReactDOM.render(React.createElement(ReactComponent), document.getElementById('root'));*/

/// Добавление React компонента через класс 

/*const ReactElement = React.createElement('button', null, 'My button сlass');
class ReactComponent extends React.Component {
    constructor(props) {  // - обязательные параметры
        super(props) // - обязательные параметры
    }
    render() {       // - обязательные параметры
        return (ReactElement)
    }
}
ReactDOM.render(React.createElement(ReactComponent), document.getElementById('root'))*/

/// Добавление React компонента через класс c JSX синтаксисом

//const ReactElement = React.createElement('button', null, 'My button сlass');
class ReactComponent extends React.Component {
    constructor(props) {  // - обязательные параметры
        super(props) // - обязательные параметры
    }
    render() {       // - обязательные параметры
        return (<button>JSX button</button>)
    }
}
ReactDOM.render(<ReactComponent/>, document.getElementById('root'))
