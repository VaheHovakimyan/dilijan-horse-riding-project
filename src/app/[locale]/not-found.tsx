
import React from "react";


import cl from "classnames";

import Link from "next/link";

export function NotFound ({

}: {


}) {
    return(
        <div >
            <div className="container">
                <div className="row">
          
                    <div className="col-md-6 align-self-center">
                        <h1>404</h1>
                        <h2>UH OH! You are lost.</h2>
                        <p>The page you are looking for does not exist.
                            How you got here is a mystery. But you can click the button below
                            to go back to the homepage.
                        </p>
                        <div>
                            <Link  style={{display: "inline-flex"}} href='/'>
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;