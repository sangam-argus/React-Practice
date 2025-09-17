import { useRouteError } from "react-router";


const Error=()=>{
    const error=useRouteError()
    return(

        <div>
            {console.log(error)}
           {error.status} {error.data}
        </div>
    )
}
export default Error;