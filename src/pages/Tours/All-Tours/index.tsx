import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DynamicTable from "../../../components/template/Table";
import TourStatus, {
	TourStatusEnum,
} from "../../../components/molecules/Status/Tour-Status";

// Define data type for each row
type BookData = {
	id: number;
	name: string;
	location: string;
	author: string;
	status: TourStatusEnum;
	reviews: number;
	date: string;
};

// Sample data for table rows
const bookData: BookData[] = [
	{
		id: 1,
		name: "Book One",
		location: "New York",
		author: "Author A",
		status: TourStatusEnum.PUBLISHED,
		reviews: 120,
		date: "2024-01-01",
	},
	{
		id: 2,
		name: "Book Two",
		location: "London",
		author: "Author B",
		status: TourStatusEnum.PROCESSING,
		reviews: 85,
		date: "2024-01-02",
	},
	{
		id: 3,
		name: "Book Three",
		location: "Paris",
		author: "Author C",
		status: TourStatusEnum.REJECTED,
		reviews: 92,
		date: "2024-01-03",
	},
	{
		id: 4,
		name: "Book Four",
		location: "Tokyo",
		author: "Author D",
		status: TourStatusEnum.PUBLISHED,
		reviews: 75,
		date: "2024-01-04",
	},
	{
		id: 5,
		name: "Book Five",
		location: "Berlin",
		author: "Author E",
		status: TourStatusEnum.PROCESSING,
		reviews: 54,
		date: "2024-01-05",
	},
	{
		id: 6,
		name: "Book Six",
		location: "Sydney",
		author: "Author F",
		status: TourStatusEnum.REJECTED,
		reviews: 46,
		date: "2024-01-06",
	},
	{
		id: 7,
		name: "Book Seven",
		location: "Dubai",
		author: "Author G",
		status: TourStatusEnum.PUBLISHED,
		reviews: 134,
		date: "2024-01-07",
	},
	{
		id: 8,
		name: "Book Eight",
		location: "Toronto",
		author: "Author H",
		status: TourStatusEnum.PROCESSING,
		reviews: 61,
		date: "2024-01-08",
	},
	{
		id: 9,
		name: "Book Nine",
		location: "Mumbai",
		author: "Author I",
		status: TourStatusEnum.PUBLISHED,
		reviews: 28,
		date: "2024-01-09",
	},
	{
		id: 10,
		name: "Book Ten",
		location: "Cape Town",
		author: "Author J",
		status: TourStatusEnum.REJECTED,
		reviews: 44,
		date: "2024-01-10",
	},
];

// Define columns with a checkbox for selection
const bookColumns: ColumnDef<BookData>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<input
				type="checkbox"
				onChange={(e) => {
					const isChecked = e.target.checked;
					table
						.getRowModel()
						.rows.forEach((row) => row.toggleSelected(isChecked));
				}}
			/>
		),
		cell: ({ row }) => (
			<input
				type="checkbox"
				checked={row.getIsSelected()}
				onChange={() => row.toggleSelected()}
			/>
		),
	},
	{ accessorKey: "name", header: "Name" },
	{ accessorKey: "location", header: "Location" },
	{ accessorKey: "author", header: "Author" },
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			return <TourStatus status={row.original.status} />;
		},
	},
	{
		accessorKey: "reviews",
		header: "Reviews",
		cell: ({ row }) => {
			return `${row.original.reviews} Reviews`;
		},
	},
	{ accessorKey: "date", header: "Date" },
	{
		accessorKey: "actions",
		header: "Action",
		cell: () => (
			<button type="button" aria-label="Action">
				Delete
			</button>
		),
	},
];
export default function AllTours() {
	const [selectedRows, setSelectedRows] = React.useState<number[]>([]);

	// Handler to track selected rows and highlight them
	const handleRowSelect = (rowId: number, isSelected: boolean) => {
		setSelectedRows((prevSelected) =>
			isSelected
				? [...prevSelected, rowId]
				: prevSelected.filter((id) => id !== rowId),
		);
	};
	return (
		<>
			<div className="all-tour-admin-section bg-white rounded-[8px] p-8 mb-4">
				<div className="flex justify-between items-center mb-8">
					<h1>All Tours</h1>
					<Link to={"/tour/add-tour"} className="btn-primary">
						{" "}
						+ Add New Tour
					</Link>
				</div>

				<div className="flex justify-between items-center">
					<div className="flex justify-start items-center">
						<select name="" id="" className="lg:min-w-[160PX] ">
							<option value="" disabled selected>
								Bulk Action
							</option>
							<option value="trash">Trash</option>
							<option value="edit">Edit</option>
						</select>
						<button type="button" className="btn-primary ">
							Apply
						</button>
					</div>
					<div className="flex justify-end items-center w-full gap-5 ">
						<div className="search-field relative">
							<input
								type="search"
								placeholder="Search by Name"
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
						<button
							type="button"
							className="btn-outlined flex items-center gap-2">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_118_1737)">
									<path
										d="M0.834214 3.95894H3.11399C3.56394 5.61448 5.27076 6.5918 6.9263 6.14185C7.98959 5.85285 8.82022 5.02223 9.10921 3.95894H19.1657C19.6259 3.95894 19.9989 3.58589 19.9989 3.1257C19.9989 2.66552 19.6259 2.29247 19.1657 2.29247H9.10921C8.65926 0.636889 6.95243 -0.340435 5.29689 0.10952C4.2336 0.398514 3.40298 1.22913 3.11399 2.29243H0.834214C0.374025 2.29243 0.000976562 2.66548 0.000976562 3.12566C0.000976562 3.58585 0.374025 3.95894 0.834214 3.95894Z"
										fill="#1663CF"
									/>
									<path
										d="M19.1657 9.16674H16.8859C16.4369 7.51144 14.731 6.53357 13.0757 6.98258C12.0115 7.27127 11.1802 8.10255 10.8915 9.16674H0.834214C0.374025 9.16674 0.000976562 9.53979 0.000976562 9.99998C0.000976562 10.4602 0.374025 10.8332 0.834214 10.8332H10.8915C11.3406 12.4885 13.0465 13.4664 14.7018 13.0174C15.7659 12.7287 16.5973 11.8974 16.8859 10.8332H19.1657C19.6259 10.8332 19.9989 10.4602 19.9989 9.99998C19.9989 9.53979 19.6259 9.16674 19.1657 9.16674Z"
										fill="#1663CF"
									/>
									<path
										d="M19.1657 16.0411H9.10921C8.65926 14.3855 6.95243 13.4082 5.29689 13.8581C4.2336 14.1471 3.40298 14.9778 3.11399 16.0411H0.834214C0.374025 16.0411 0.000976562 16.4141 0.000976562 16.8743C0.000976562 17.3345 0.374025 17.7075 0.834214 17.7075H3.11399C3.56394 19.3631 5.27076 20.3404 6.9263 19.8904C7.98959 19.6014 8.82022 18.7708 9.10921 17.7075H19.1657C19.6259 17.7075 19.9989 17.3345 19.9989 16.8743C19.9989 16.4141 19.6259 16.0411 19.1657 16.0411Z"
										fill="#1663CF"
									/>
								</g>
								<defs>
									<clipPath id="clip0_118_1737">
										<rect width="20" height="20" fill="white" />
									</clipPath>
								</defs>
							</svg>
							Advanced Filter
							<svg
								width="14"
								height="8"
								viewBox="0 0 14 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.4225 0.494075C13.7479 0.819517 13.7479 1.34715 13.4225 1.67259L7.58917 7.50592C7.26375 7.83133 6.73609 7.83133 6.41067 7.50592L0.577327 1.67259C0.251894 1.34715 0.251894 0.819517 0.577327 0.494075C0.902769 0.168642 1.4304 0.168642 1.75584 0.494075L6.99992 5.73817L12.244 0.494075C12.5694 0.168642 13.0971 0.168642 13.4225 0.494075Z"
									fill="#1663CF"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className="tour-table bg-white rounded-[8px] p-8">
				<div className="tt-header mb-4">
					<h2>16 Items Found</h2>
				</div>
				<div className="table-wrapper">
					<DynamicTable
						columns={bookColumns}
						data={bookData.map((row) => ({
							...row,
							isSelected: selectedRows.includes(row.id),
						}))}
					/>
				</div>
			</div>
		</>
	);
}
