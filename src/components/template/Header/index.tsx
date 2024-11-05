import "./header.scss";

export default function Header() {
	return (
		<header className="header py-5 px-8 bg-white">
			<div className="header-content flex justify-between items-center">
				<h2>Welcome Back Arjun Jhukal</h2>

				<div className="header-right flex justify-end items-center gap-[48px]">
					<button type="button" className="notification-bell relative">
						<img src="/notification.svg" alt="" className="img-fluid" />
						<sup>2</sup>
					</button>
					<button
						type="button"
						className="user-info flex justify-start items-center gap-3 relative">
						<div className="user-profile">
							<img src="/profile.png" alt="" />
						</div>
						<div className="user-detail">
							<h3 className="mb-1">Arjun Jhukal</h3>
							<p className="sm-text text-start">Administrator</p>
						</div>
					</button>
				</div>
			</div>
		</header>
	);
}
