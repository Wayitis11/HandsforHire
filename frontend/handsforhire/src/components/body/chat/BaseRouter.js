import React from "react";
import { Route } from "react-router-dom";
import ChatTemplate from "./ChatTemplate";
const BaseRouter = () =>{
    <div>
        <Route exact path="/:chatID" component={ChatTemplate} />
    </div>
};

export default BaseRouter;