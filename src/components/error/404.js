import React, {useRef} from "react";
import notPage from '../../assets/404.png'

function NotFoundPage({container}){
    container.current.style = 'height:400px;'

    return (
        <div className="not-found fadeIn" style={{"display":"block"}}>
            <img src={notPage} />
            <p>Oops! Invalid location :/</p>
        </div>
    )

}

export default NotFoundPage;
