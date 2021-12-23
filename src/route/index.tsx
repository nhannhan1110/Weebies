import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FooterPage } from '../components/Footer';
import Navbar from '../components/Navbar';
import { PrivateRoute } from '../components/PrivateRoute';
import Subcribe from '../components/Subcribe';
import { DFRole } from '../Constant/DFRole';
import { ForgotPass } from '../pages/ForgotPass';
import HomePage from '../pages/HomePage';
import { ProfilePage } from '../pages/Profile';
import { ResetPass } from '../pages/ResetPass';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { defaultRoute } from './defaultroute';
import { About } from '../pages/About';
import { PayIn } from '../pages/PayIn';
import { Transfer } from '../pages/Transfer';
import History from '../pages/History';
import {Contact} from '../pages/Contact';

interface IRoute {
	exact: Boolean;
	path: string;
	child: React.ReactChild | any;
}

interface IPrivateRoute {
	exact: Boolean;
	path: string;
	child: React.ReactChild | any;
	private?: Boolean;
	option: boolean;
	roleRoute?: Array<number>;
}

const routes: Array<IRoute> = [
	{
		child: (
			<>
				<HomePage />
			</>
		),
		path: defaultRoute.homepage,
		exact: true
	},
	{
		child: (
			<>
				<SignIn />
			</>
		),
		path: defaultRoute.signin,
		exact: true
	},
	{
		child: (
			<>
				<SignUp />
			</>
		),
		path: defaultRoute.signup,
		exact: true
	},
	{
		child: (
			<>
				<ForgotPass />
			</>
		),
		path: defaultRoute.forgotpass,
		exact: true
	},
	{
		child: (
			<>
				<About />
			</>
		),
		path: defaultRoute.about,
		exact: true
	},
	{
		child: (
			<>
				<PayIn />
			</>
		),
		path: defaultRoute.payin,
		exact: true
	},
	{
		child: (
			<>
				<Transfer />
			</>
		),
		path: defaultRoute.transfer,
		exact: true
	},
	{
		child: (
			<>
				<ProfilePage />
			</>
		),
		path: defaultRoute.profile,
		exact: true
	},
	{
		child: (
			<>
				<History />
			</>
		),
		path: '/history',
		exact: true
	},
	{
		child: (
			<>
				<Contact />
			</>
		),
		path: '/contact',
		exact: true
	}

];
// History

const routesPrivate = [
	{
		child: <ResetPass />,
		path: defaultRoute.resetpass,
		exact: true,
		option: true,
		roleRoute: [DFRole.Admin, DFRole.User, DFRole.Staff]
	},
	{
		child: <ProfilePage />,
		path: defaultRoute.profile,
		exact: true,
		option: true,
		roleRoute: [DFRole.User, DFRole.Staff, DFRole.Admin]
	}
];

const renderPrivateRoute = (routes: Array<IPrivateRoute>) => {
	return routes.map((r, i) => {
		if (r.exact) {
			return (
				<PrivateRoute
					path={r.path}
					exact
					key={i}
					option={r.option}
					roleRoute={r?.roleRoute}>
					{r.child}
				</PrivateRoute>
			);
		} else {
			return (
				<PrivateRoute
					path={r.path}
					key={i}
					option={r.option}
					roleRoute={r?.roleRoute}>
					{r.child}
				</PrivateRoute>
			);
		}
	});
};

const renderRoute = (routes: Array<IRoute>) => {
	return routes.map((r, i) => {
		if (r.exact) {
			return (
				<Route path={r.path} exact key={i}>
					{r.child}
				</Route>
			);
		} else {
			return (
				<Route path={r.path} key={i}>
					{r.child}
				</Route>
			);
		}
	});
};

const Router = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				{renderRoute(routes)}
				{renderPrivateRoute(routesPrivate)}
			</Switch>
			<Subcribe />
			<FooterPage />
		</BrowserRouter>
	);
};

export default Router;
