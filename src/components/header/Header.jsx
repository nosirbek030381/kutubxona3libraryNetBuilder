import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/bax.png'

function Header() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-primary p-3'>
				<div className='container'>
					<div className='d-flex align-items-center'>
						<img src={Logo} className='' width={50} />
						<a className='navbar-brand px-3' href='#'>
							Urganch Yoshlar Kutubxonasi
						</a>
					</div>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavDropdown'
						aria-controls='navbarNavDropdown'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div className=' collapse navbar-collapse' id='navbarNavDropdown'>
						<ul className='navbar-nav ms-auto '>
							<li className='nav-item'>
								<Link to='/' className='nav-link mx-2 active' aria-current='page'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/BooksList' className='nav-link mx-2 active' aria-current='page'>
									Books
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/About' className='nav-link mx-2 active' aria-current='page'>
									About
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
