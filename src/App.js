
import ReactDom from "react-dom/client";
import DisplayList from "./components/DisplayList"

const App= ()=>{

    return(
        <>
        <DisplayList/>
        </>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);