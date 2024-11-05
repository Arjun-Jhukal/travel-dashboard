import React from "react";
import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import PATH from "../../routes/PATH";

export default function Sidebar() {
	const [expandSidebar, setExpandSidebar] = React.useState<boolean>(false);
	const [tour, setTour] = React.useState<boolean>(false);
	const [location, setLocation] = React.useState<boolean>(false);
	const [hotel, setHotel] = React.useState<boolean>(false);
	const [reviews, setReviews] = React.useState<boolean>(false);
	const [news, setNews] = React.useState<boolean>(false);
	const [user, setUser] = React.useState<boolean>(false);
	const [userPlans, setUserPlans] = React.useState<boolean>(false);

	const navigate = useNavigate();

	const handleSidebarExpand = () => {
		setExpandSidebar((prev) => !prev);
		setTour(false);
		setLocation(false);
		setHotel(false);
		setReviews(false);
		setNews(false);
		setUser(false);
		setUserPlans(false);
	};

	return (
		<div
			className={`sidebar bg-white border-[1px] border-border border-solid max-h-screen overflow-auto ${
				!expandSidebar ? "" : "collapse-sidebar"
			}`}>
			<div className="sidebar-header flex justify-between items-center  px-4 py-6 mb-5 border-b-[1px] border-border border-solid sticky top-0 bg-white z-10">
				<div className="sidebar-logo">
					<Link to="/">
						<img src="/logo.svg" alt="Logo" className="img-fluid" />
					</Link>
				</div>
				<button
					type="button"
					className="expand-sidebar"
					onClick={handleSidebarExpand}>
					<img
						src="/menu-icon.svg"
						alt="Expand Sidebar"
						className="img-fluid"
					/>
				</button>
			</div>

			<div className="menu-blocks">
				<div className="menu-block">
					<span className="uppercase">GENERAL</span>
					<ul>
						<li>
							<button
								className="flex justify-start items-center gap-3 active"
								onClick={() => navigate(PATH.DASHBOARD.ROOT)}>
								<img src="/dashboard.svg" alt="Dashboard" />
								<span>Dashboard</span>
							</button>
						</li>
						<li className="menu-has-children">
							<button
								className="flex justify-start items-center gap-3"
								onClick={() => {
									!expandSidebar
										? setLocation((prev) => !prev)
										: navigate(PATH.DASHBOARD.ROOT);
								}}>
								<img src="/location.svg" alt="Location" />
								<span>Location</span>
							</button>
							<div className={`dropdown-menu ${location ? "expand" : ""}`}>
								<ul className="sub-menu">
									<li>
										<Link to="/dashboard">All Locations</Link>
									</li>
									<li>
										<Link to="/dashboard">Add Locations</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className="menu-has-children">
							<button
								onClick={() => {
									!expandSidebar
										? setHotel((prev) => !prev)
										: navigate(PATH.DASHBOARD.ROOT);
								}}
								className="flex justify-start items-center gap-3">
								<img src="/hotel.svg" alt="Hotel" />
								<span>Hotel</span>
							</button>
							<div className={`dropdown-menu ${hotel ? "expand" : ""}`}>
								<ul className="sub-menu">
									<li>
										<Link to="/dashboard">All Hotels</Link>
									</li>
									<li>
										<Link to="/dashboard">Add Hotel</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className="menu-has-children">
							<button
								className="flex justify-start items-center gap-3"
								onClick={() => {
									!expandSidebar
										? setTour((prev) => !prev)
										: navigate(PATH.DASHBOARD.ROOT);
								}}>
								<img src="/tours.svg" alt="Tours" />
								<span>Tours</span>
							</button>
							<div className={`dropdown-menu ${tour ? "expand" : ""}`}>
								<ul className="sub-menu">
									<li>
										<Link to="/dashboard">All Tours</Link>
									</li>
									<li>
										<Link to="/dashboard">Add Tour</Link>
									</li>
									<li>
										<Link to="/dashboard">Categories</Link>
									</li>
									<li>
										<Link to="/dashboard">Attributes</Link>
									</li>
									<li>
										<Link to="/dashboard">Availability</Link>
									</li>
									<li>
										<Link to="/dashboard">Booking Calendar</Link>
									</li>
									<li>
										<Link to="/dashboard">Recovery</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className="menu-has-children">
							<button
								onClick={() => {
									!expandSidebar
										? setReviews((prev) => !prev)
										: navigate(PATH.DASHBOARD.ROOT);
								}}
								className="flex justify-start items-center gap-3">
								<img src="/reviews.svg" alt="Reviews" />
								<span> Reviews</span>
							</button>
							<div className={`dropdown-menu ${reviews ? "expand" : ""}`}>
								<ul className="sub-menu">
									<li>
										<Link to="/dashboard">All Reviews</Link>
									</li>
									<li>
										<Link to="/dashboard">Add Review</Link>
									</li>
									<li>
										<Link to="/dashboard">Manage Review</Link>
									</li>
									<li>
										<Link to="/dashboard">My Reviews</Link>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>

				<div className="menu-block">
					<span className="uppercase">Content</span>
					<ul>
						<li className="menu-has-children">
							<button
								onClick={() => {
									!expandSidebar
										? setNews((prev) => !prev)
										: navigate(PATH.DASHBOARD.ROOT);
								}}
								className="flex justify-start items-center gap-3">
								<img src="/news.svg" alt="News" />
								<span>News</span>
							</button>
							<div className={`dropdown-menu ${news ? "expand" : ""}`}>
								<ul className="sub-menu">
									<li>
										<Link to="/dashboard">All Reviews</Link>
									</li>
									<li>
										<Link to="/dashboard">Add Review</Link>
									</li>
									<li>
										<Link to="/dashboard">Manage Review</Link>
									</li>
									<li>
										<Link to="/dashboard">My Reviews</Link>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<button
								className="flex justify-start items-center gap-3"
								onClick={() => navigate("/dashboard")}>
								<img src="/pages.svg" alt="Page" />
								<span>Pages</span>
							</button>
						</li>
						<li>
							<button
								className="flex justify-start items-center gap-3"
								onClick={() => navigate("/dashboard")}>
								<img src="/tours.svg" alt="Media" />
								<span>Media</span>
							</button>
						</li>
					</ul>
				</div>

				<div className="menu-block">
					<span className="uppercase">System</span>
					<ul>
						<li className="menu-has-children">
							<button
								onClick={() => {
									!expandSidebar
										? setUser((prev) => !prev)
										: navigate(PATH.DASHBOARD.ROOT);
								}}
								className="flex justify-start items-center gap-3">
								<img src="/user.svg" alt="Users" />
								<span>Users</span>
							</button>
							<div className={`dropdown-menu ${user ? "expand" : ""}`}>
								<ul className="sub-menu">
									<li>
										<Link to="/dashboard">All Reviews</Link>
									</li>
									<li>
										<Link to="/dashboard">Add Review</Link>
									</li>
									<li>
										<Link to="/dashboard">Manage Review</Link>
									</li>
									<li>
										<Link to="/dashboard">My Reviews</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className="menu-has-children">
							<button
								onClick={() => {
									!expandSidebar
										? setUserPlans((prev) => !prev)
										: navigate(PATH.DASHBOARD.ROOT);
								}}
								className="flex justify-start items-center gap-3">
								<img src="/plans.svg" alt="User Plans" />
								<span>User Plans</span>
							</button>
							<div className={`dropdown-menu ${userPlans ? "expand" : ""}`}>
								<ul className="sub-menu">
									<li>
										<Link to="/dashboard">All Reviews</Link>
									</li>
									<li>
										<Link to="/dashboard">Add Review</Link>
									</li>
									<li>
										<Link to="/dashboard">Manage Review</Link>
									</li>
									<li>
										<Link to="/dashboard">My Reviews</Link>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<button
								className="flex justify-start items-center gap-3"
								onClick={() => navigate("/dashboard")}>
								<img src="/popups.svg" alt="Popup" />
								<span>Popup</span>
							</button>
						</li>
						<li>
							<button
								className="flex justify-start items-center gap-3"
								onClick={() => navigate("/dashboard")}>
								<img src="/menu.svg" alt="Menu" />
								<span>Menu</span>
							</button>
						</li>
						<li>
							<button
								className="flex justify-start items-center gap-3"
								onClick={() => navigate("/dashboard")}>
								<img src="/payouts.svg" alt="Payouts" />
								<span>Payouts</span>
							</button>
						</li>
						<li>
							<button
								className="flex justify-start items-center gap-3"
								onClick={() => navigate("/dashboard")}>
								<img src="/settings.svg" alt="Settings" />
								<span>Settings</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
