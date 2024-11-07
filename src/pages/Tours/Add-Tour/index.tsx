import React from "react";

export default function AddTour() {
	const [itinerary, setItinerary] = React.useState<number>(1);
	const [attractionPopup, setAttractionPopup] = React.useState<boolean>(false);

	const handleItineraryAddition = () => {
		setItinerary((prev) => (prev += 1));
	};
	return (
		<>
			<div className="add-tour-admin-section mb-8">
				<div>
					<h1>Add New Tour</h1>
				</div>
			</div>

			<div className="tour-add-form">
				<div className="grid grid-cols-4 gap-4">
					<div className="col-span-1 ">
						<ul className="bg-white rounded-[8px] overflow-hidden sticky top-0 ">
							<li className="active">
								<button className="px-8 py-3 hover:bg-primary  w-full block text-left hover:text-white ">
									General
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary  w-full block text-left hover:text-white ">
									Location
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary  w-full block text-left hover:text-white ">
									Pricing
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary  w-full block text-left hover:text-white ">
									Availability
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary  w-full block text-left hover:text-white ">
									Status
								</button>
							</li>
							<li>
								<button className="px-8 py-3 hover:bg-primary  w-full block text-left hover:text-white ">
									SEO
								</button>
							</li>
						</ul>
					</div>
					<div className="col-span-3">
						<div className="bg-white rounded-[8px] py-10 px-8">
							<div className="block-title mb-6">
								<h2>Itinerary</h2>
							</div>

							<div className="mb-8 itinerary-wrapper">
								{Array.from({ length: itinerary }).map((item, index) => (
									<div className="itinerary-block" key={index.toString()}>
										<div className="input-field">
											<label>Title</label>
											<input type="text" value={"Day 1"} />
										</div>
										<div className="input-field">
											<label>Description</label>
											<input type="text" value={"Los Angeles"} />
										</div>
										<div className="input-field">
											<label>Content</label>
											<textarea
												rows={4}
												value="There are no activities planned until an evening welcome meeting. Additional Notes: We highly recommend booking pre-tour accommodation to fully experience this crazy city."></textarea>
										</div>
										<div className="input-field">
											<label>Attractions</label>
											{/* <div className="grid grid-cols-5 gap-6">
											<div className="col-span-1">
												<div className="attraction-item relative">
													<img
														src="/itinerary.png"
														alt=""
														className="img-fluid mb-3"
													/>
													<span className="text-[16px] leading-[19px]">
														The Getty
													</span>
													<button type="button" className="remove-attraction">
														<img src="/x-mark.svg" alt="" />
													</button>
												</div>
											</div>
										</div> */}
											<button
												type="button"
												className="btn-text"
												onClick={() => setAttractionPopup(true)}>
												+ Add Attractions
											</button>
										</div>
									</div>
								))}
							</div>

							<button
								type="button"
								className="btn-primary"
								onClick={handleItineraryAddition}>
								Add Another Itinerary
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`attraction-popup px-3 py-7 rounded-md bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] xl:min-w-[1016px] z-10 ${
					!attractionPopup ? "opacity-0 invisible" : ""
				}`}>
				<div className="ap-header flex justify-between items-center pb-6 px-5">
					<div className="title">
						<h2>Add Attraction</h2>
						<span className="sm-text">Attractions for Day 1</span>
					</div>
					<div className="search-field relative">
						<input
							type="search"
							placeholder="Search for Attraction"
							className="lg:min-w-[476px]"
						/>
						<button
							type="button"
							className="btn-primary gap-2 flex items-center absolute top-[6px] right-[6px] bottom-[6px] ">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M17.9029 16.7843L17.9029 16.7843L17.9014 16.7827L14.0046 12.886C15.0607 11.5496 15.5774 9.86389 15.4496 8.16261C15.3189 6.42368 14.5249 4.80149 13.2318 3.63157C11.9386 2.46166 10.2453 1.83354 8.50196 1.87713C6.75868 1.92071 5.09883 2.63268 3.86575 3.86575C2.63268 5.09883 1.92071 6.75868 1.87713 8.50196C1.83354 10.2453 2.46166 11.9386 3.63157 13.2318C4.80149 14.5249 6.42368 15.3189 8.16261 15.4496C9.86389 15.5774 11.5496 15.0607 12.886 14.0046L16.7827 17.9014L16.7827 17.9014L16.7843 17.9029C16.9335 18.047 17.1333 18.1268 17.3408 18.125C17.5482 18.1232 17.7466 18.04 17.8933 17.8933C18.04 17.7466 18.1232 17.5482 18.125 17.3408C18.1268 17.1333 18.047 16.9335 17.9029 16.7843ZM8.68237 13.8865C7.65318 13.8864 6.6471 13.5812 5.79135 13.0094C4.93557 12.4376 4.26856 11.6249 3.87469 10.674C3.48081 9.72308 3.37776 8.67674 3.57855 7.66727C3.77935 6.6578 4.27498 5.73055 5.00276 5.00276C5.73055 4.27498 6.6578 3.77935 7.66727 3.57855C8.67674 3.37776 9.72308 3.48081 10.674 3.87469C11.6249 4.26856 12.4376 4.93557 13.0094 5.79135C13.5812 6.6471 13.8864 7.65318 13.8865 8.68237C13.8849 10.0621 13.3361 11.3849 12.3605 12.3605C11.3849 13.3361 10.0621 13.8849 8.68237 13.8865Z"
									fill="white"
									stroke="white"
									stroke-width="0.25"
								/>
							</svg>
							Search
						</button>
					</div>
				</div>
				<div className="grid grid-cols-5 gap-6 max-h-[400px] overflow-auto attraction-wrapper px-5 pb-8">
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-span-1">
						<div className="attraction-item relative selected">
							<img src="/itinerary.png" alt="" className="img-fluid mb-3" />
							<span className="text-[16px] leading-[19px]">The Getty</span>
							<button type="button" className="add-attraction">
								<img src="/checked.svg" alt="" />
							</button>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 items-center py-4 px-5 border-t-[1px] border-solid border-body">
					<div className="col-span-1">
						<h4 className="text-center">2 item Selected</h4>
					</div>
					<div className="col-span-1">
						<button type="button" className="btn-primary block w-full">
							Confirm
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
