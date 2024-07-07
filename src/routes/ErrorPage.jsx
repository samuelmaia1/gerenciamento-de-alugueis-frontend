import { useRouteError } from "react-router-dom"
import './ErrorPage.css'
export function ErrorPage(){
    const error = useRouteError()
    return (
        <>
            <div className="error">
                <h1>Ops! Temos um problema</h1>
                <p>{error.statusText}</p>
                <p>{error.error.message}</p>
            </div>
        </>
    )

}