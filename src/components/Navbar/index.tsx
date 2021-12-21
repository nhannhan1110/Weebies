import React, { useRef, useState } from 'react';
import { IoMdCart } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import reactSelectCjs from 'react-select';
import { logoutUser } from '../../features/auths/slice';
import { selectCurrentUser } from '../../features/auths/slice/selector';
import { getCurrentUserAsync } from '../../features/auths/slice/thunk';
import { useHistory } from 'react-router';

function useComponentVisible(initialIsVisible: any) {
	const [isComponentVisible, setIsComponentVisible] =
		useState(initialIsVisible);
	const ref = useRef<any>(null);

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};

	React.useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return { ref, isComponentVisible, setIsComponentVisible };
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(true);
	const dispatch = useDispatch();
	const toggleDropdown04 = (e: any) => {
		e.target.className =
			'nav-link dropdown-toggle' === e.target.className
				? 'nav-link dropdown-toggle active'
				: 'nav-link dropdown-toggle';
	};

	const blurDropdown04 = (e: any) => {
		e.target.className = 'nav-link dropdown-toggle';
	};

	const history = useHistory();
	const user = useSelector(selectCurrentUser);
	console.log(`LHA:  ===> file: index.tsx ===> line 50 ===> user`, user);
	const handleLogout = () => {
		dispatch(logoutUser());
		history.push('/');
	};
	React.useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(getCurrentUserAsync());
		}
	}, []);

	return (
		<nav
			className='
        navbar navbar-expand-lg
        ftco_navbar
        ftco-navbar-light
    '
			id='ftco-navbar'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					Weebies
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#ftco-nav'
					aria-controls='ftco-nav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='oi oi-menu'></span> Menu
				</button>

				<div className='collapse navbar-collapse' id='ftco-nav'>
					{user ? (
						<>
							<ul className='navbar-nav ml-auto'>
								<li className='nav-item active'>
									<Link to='/' className='nav-link'>
										Home
									</Link>
								</li>
								<li
									className='nav-item dropdown'
									tabIndex={0}
									ref={ref}
									onClick={() => setIsComponentVisible(true)}>
									<Link
										className='nav-link dropdown-toggle active'
										to='#'
										id='dropdown04'>
										Service
									</Link>
									{isComponentVisible && (
										<div className='dropdown-menu' aria-labelledby='dropdown04'>
											<Link className='dropdown-item' to='/opencard'>
												Open card
											</Link>

											<Link className='dropdown-item' to='/payin'>
												Pay in
											</Link>
											<Link className='dropdown-item' to='/transfer'>
												Transfer
											</Link>
										</div>
									)}
								</li>
								<li className='nav-item'>
									<Link to='/history' className='nav-link'>
										History
									</Link>
								</li>
								<li className='nav-item'>
									<Link to='/contact' className='nav-link'>
										Contact
									</Link>
								</li>

								<li className='nav-item'>
									<Link to='/about' className='nav-link'>
										About
									</Link>
								</li>
								<li className='nav-item flex'>
									<Link className='nav-link items-center flex ' to='/profile'>
										<div className='w-[50px] h-[50px]'>
											<img
												className='object-cover w-full h-full'
												src={user?.avatar}
												style={{ borderRadius: '50%' }}
											/>
										</div>

										<label className='ms-3 fw-bold' style={{ paddingTop: 20 }}>
											{user?.name}
										</label>
									</Link>
								</li>
								<li className='nav-item'>
									<a onClick={handleLogout} style={{ color: 'red' }}>
										Log out
									</a>
								</li>

							</ul>
						</>
					) : (
						<>
							<ul className='navbar-nav ml-auto'>
								<li className='nav-item active'>
									<Link to='/' className='nav-link'>
										Home
									</Link>
								</li>
								<li
									className='nav-item dropdown'
									// onBlur={blurDropdown04}
									tabIndex={0}
									// onClick={toggl`eDropdown04}
									ref={ref}
									onClick={() => setIsComponentVisible(true)}>
									<Link
										className='nav-link dropdown-toggle active'
										to='#'
										id='dropdown04'>
										Service
									</Link>
									{/* {isComponentVisible && (
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      <Link
                        className="dropdown-item"
                        to="/shop"
                        onClick={() => setIsComponentVisible(false)}
                      >
                        Product
                      </Link>
                    </div>
                  )} */}
								</li>

								<li className='nav-item'>
									<Link to='/contact' className='nav-link'>
										Contact
									</Link>
								</li>
								<li className='nav-item'>
									<Link to='/signin' className='nav-link'>
										SignIn
									</Link>
								</li>
								<li className='nav-item'>
									<Link to='/signup' className='nav-link'>
										SignUp
									</Link>
								</li>
							</ul>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
