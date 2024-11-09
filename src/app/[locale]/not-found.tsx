import React from "react"
import NavigationLink from "../_components/NavigationLink";

export function NotFound({ }: {}) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h1>404</h1>
                        <h2>UH OH! You are lost.</h2>
                        <p>The page you are looking for does not exist.
                            How you got here is a mystery. But you can click the button below
                            to go back to the homepage.
                        </p>
                        <>
                            <NavigationLink style={{ display: "inline-flex" }} href={"/"}>
                                Home
                            </NavigationLink>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;