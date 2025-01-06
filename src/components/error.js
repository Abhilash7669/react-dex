import { useRouteError } from "react-router";
import classes from "./error.module.css";


export default function Error() {

    const error = useRouteError();

    
    let title = "Oops", message = "Something went wrong";
    

    if(error.status === 404) {
        title = "404";
        message = "Oops! Could not find what you were looking for";
    }
    
    if(error.status === 500) {
        const errorData = JSON.parse(error.data);
        title= "Oops"
        message = errorData.message;
    }


    return(
      <div className="main-container">
        <div className={classes.error_container}>
            <h1>
                {title}
            </h1>
            <p>
                {message}
            </p>
        </div>
      </div>
    )

}