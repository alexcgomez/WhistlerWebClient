import * as React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  isLoggedIn?: boolean;
}

export class PrivateRoute extends Route<PrivateRouteProps> {
  render() {
    return (
      <Route render={(props: RouteComponentProps) => {
        if(!this.props.isLoggedIn) {
          return <Redirect to={'/'} />
        }

        if(this.props.component) {
          return React.createElement(this.props.component);
        }

        if(this.props.render) {
          return this.props.render(props);
        }
      }} />
    );
  }
}
