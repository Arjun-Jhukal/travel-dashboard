import { ColumnDef } from "@tanstack/react-table";
import DynamicTable from "../../components/template/Table";
import { Link } from "react-router-dom";
import "./dashboard.scss";
import ProfitLossStatus from "../../components/molecules/Status/Gain";
import TourStatus, {
	TourStatusEnum,
	TourStatusProps,
} from "../../components/molecules/Status/Tour-Status";

type TripData = {
	SN: number | string;
	trip: string;
	totalPaid: number;
	status: TourStatusEnum;
	createdAt: string;
};
export enum Overall {
	LOSS = "LOSS",
	PROFIT = "PROFIT",
}

const tripColumns: ColumnDef<TripData>[] = [
	{ accessorKey: "SN", header: "SN" },
	{ accessorKey: "trip", header: "Trip" },
	{ accessorKey: "totalPaid", header: "Total Paid" },
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			// Pass the status to TourStatus component
			return <TourStatus status={row.original.status} />;
		},
	},
	{ accessorKey: "createdAt", header: "Created At" },
	{
		accessorKey: "actions",
		header: "Actions",
		cell: () => {
			return (
				<button type="button" aria-label="Actions">
					Delete
				</button>
			);
		},
	},
];

const tripData: TripData[] = [
	{
		SN: "#1",
		trip: "Trip to Nepal",
		totalPaid: 500,
		status: TourStatusEnum.PROCESSING,
		createdAt: "2024-10-01",
	},
	{
		SN: "#2",
		trip: "Trip to Japan",
		totalPaid: 1200,
		status: TourStatusEnum.PUBLISHED,
		createdAt: "2024-10-05",
	},
	{
		SN: "#3",
		trip: "Trip to Japan",
		totalPaid: 1200,
		status: TourStatusEnum.REJECTED,
		createdAt: "2024-10-05",
	},
];

const cardData = [
	{
		title: "Revenue",
		icon: "/revenue.svg",
		amount: "$70,567",
		percentageChange: 10.2,
		overall: Overall.PROFIT,
	},
	{
		title: "Earnings",
		icon: "/earning.svg",
		amount: "$9,284",
		percentageChange: 2.3,
		overall: Overall.LOSS,
	},
	{
		title: "Bookings",
		icon: "/booking.svg",
		amount: "20",
		percentageChange: 10.3,
		overall: Overall.PROFIT,
	},
	{
		title: "Services",
		icon: "/services.svg",
		amount: "135",
		percentageChange: 10.3,
		overall: Overall.PROFIT,
	},
];

export const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="card-wrapper">
				<div className="lg:grid grid-cols-4 gap-6">
					{cardData.length > 0 &&
						cardData.map((item) => (
							<div className="col-span-1" key={item.title}>
								<div className="card">
									<div className="card-title flex justify-start items-center gap-2 mb-4">
										<div className="card-icon">
											<img src={item.icon} alt="" className="img-fluid" />
										</div>
										<h3>{item.title}</h3>
									</div>
									<div className="card-body flex justify-start item-center gap-3">
										<h1>{item.amount}</h1>
										<ProfitLossStatus
											profitOrLoss={item.overall}
											percentageChange={item.percentageChange}
										/>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
			<div className="table-wrapper bg-white rounded-[8px] p-8">
				<div className="table-header flex justify-between items-center mb-4">
					<h2>Recent Bookings</h2>
					<Link
						to={"/"}
						className="flex items-center justify-end gap-2 text-blue-600">
						View All
						<svg
							width="8"
							height="14"
							viewBox="0 0 8 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0.494074 0.577436C0.819516 0.25202 1.34715 0.25202 1.67259 0.577436L7.50592 6.41077C7.83133 6.73619 7.83133 7.26385 7.50592 7.58927L1.67259 13.4226C1.34715 13.748 0.819517 13.748 0.494075 13.4226C0.168642 13.0972 0.168642 12.5695 0.494075 12.2441L5.73817 7.00002L0.494074 1.75594C0.168641 1.43052 0.168641 0.902853 0.494074 0.577436Z"
								fill="#1C42A1"
							/>
						</svg>
					</Link>
				</div>
				<DynamicTable columns={tripColumns} data={tripData} />
			</div>
		</div>
	);
};

export default Dashboard;
