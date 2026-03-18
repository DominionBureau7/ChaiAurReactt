function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)*/ /*Problem in this*/ 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === "children")continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',

    },
    children: "Click me to visit Google!"
}// = <a href="https://google.com" target="_blank">Click me to visit Google!</a>
const mainContainer = document.getElementById('root');//This finds the HTML element where we want to insert our element.

customRender(reactElement, mainContainer)//(kya inject karu, kaha pe inject karu)
