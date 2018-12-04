import React, {Component} from 'react';
import NotificationsView from "./NotificationsView";


class NotificationsController extends React.Component{

    state = {
        notifications: [],

    }


    render()  {
        return (
            <NotificationsView

            />
        );
    }

}
export default NotificationsController



