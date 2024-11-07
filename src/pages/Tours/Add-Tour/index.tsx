export default function AddTour() {
	return (
		<>
			<div className="add-tour-admin-section mb-8">
				<div>
					<h1>Add New Tour</h1>
				</div>
			</div>

			<div className="tour-add-form">
				<div className="grid grid-cols-4 gap-4">
					<div className="col-span-1">
						<ul className="bg-white rounded-[8px] overflow-hidden">
							<li className="active">
								<button className="px-8 py-3 hover:bg-primary active:bg-primary w-full block text-left hover:text-white active:text-white">
									General
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary active:bg-primary w-full block text-left hover:text-white active:text-white">
									Location
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary active:bg-primary w-full block text-left hover:text-white active:text-white">
									Pricing
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary active:bg-primary w-full block text-left hover:text-white active:text-white">
									Availability
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary active:bg-primary w-full block text-left hover:text-white active:text-white">
									Status
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary active:bg-primary w-full block text-left hover:text-white active:text-white">
									SEO
								</button>
							</li>
						</ul>
					</div>
					<div className="col-span-3">
						<div className="bg-white rounded-[8px] py-10 px-8">
							<button type="button" className="btn-primary">
								Add Itinerary
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
