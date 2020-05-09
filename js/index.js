function createElement( tag, attrs, ...children ) {
    return {
        tag,
        attrs,
        children
    }
}
const React = {
    createElement
}
const dd = <h1>Hello-Component2</h1>;
console.log(dd);