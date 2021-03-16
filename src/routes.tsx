import DashboardLayout from "layouts/Dashboard";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import AllProductsPage from "pages/products";
import SingleProductPage from "pages/products/[id]";
import TRLPage from "pages/TRL";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ErrorLayout = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

interface ILayout {
  component: React.ElementType;
  layout: React.ElementType;
  path?: string;
  exact?: boolean;
  // isAuth?: boolean;
  // proctected: boolean;
}

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: ILayout): JSX.Element => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppRoute
          exact
          path="/"
          component={HomePage}
          layout={DashboardLayout}
        />
        <AppRoute
          exact
          path="/products"
          component={AllProductsPage}
          layout={DashboardLayout}
        />
        <AppRoute
          path="/products/:id"
          component={SingleProductPage}
          layout={DashboardLayout}
        />
        <AppRoute
          exact
          path="/trl"
          component={TRLPage}
          layout={DashboardLayout}
        />
        <AppRoute component={ErrorPage} layout={ErrorLayout} />
      </Switch>
    </Router>
  );
};

export default Routes;
