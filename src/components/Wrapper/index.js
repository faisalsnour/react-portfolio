import "./style.css"

export default function Wrapper(props) {
    return (
        <main className="wrapper">{props.children}</main>
    )
}