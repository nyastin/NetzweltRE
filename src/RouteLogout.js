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
            return (
              <Redirect
                to={{
                  pathname: "/Dashboard",
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
