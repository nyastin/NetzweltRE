import React from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";

function LoginChecker({ component: Component, ...rest }) {
  const user = Cookies.get("user");
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (user) {
            //checks if there's an existing user
            return (
              <Redirect //handles the session if there's a user
                to={{
                  pathname: "/dashboard",
                  state: { from: props.location },
                }}
              />
            );
          } else {
            return <Component />;
          }
        }}
      />
    </div>
  );
}

export default LoginChecker;
