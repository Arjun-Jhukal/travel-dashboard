import { Overall } from "../../../../pages/Dashboard";

type Gain = "PROFIT" | "LOSS";

interface Props {
	profitOrLoss: Gain;
	percentageChange: number;
}
export default function ProfitLossStatus(props: Props) {
	return (
		<span
			className={`flex items-center profit-loss-status gap-1 ${
				props.profitOrLoss === Overall.PROFIT ? "profit" : "loss"
			}`}>
			{props.percentageChange}%
			<svg
				width="10"
				height="10"
				viewBox="0 0 10 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.934147 8.0052C0.641254 8.2981 0.641254 8.77297 0.934147 9.06586C1.22704 9.35876 1.70191 9.35876 1.99481 9.06586L0.934147 8.0052ZM9.28554 1.46447C9.28555 1.05025 8.94976 0.714466 8.53554 0.714467L1.78555 0.714466C1.37133 0.714466 1.03555 1.05025 1.03555 1.46447C1.03555 1.87868 1.37133 2.21447 1.78555 2.21447L7.78555 2.21447L7.78554 8.21447C7.78555 8.62868 8.12133 8.96447 8.53554 8.96447C8.94976 8.96447 9.28555 8.62868 9.28555 8.21447L9.28554 1.46447ZM1.99481 9.06586L9.06588 1.9948L8.00522 0.934136L0.934147 8.0052L1.99481 9.06586Z"
					fill="#008000"
				/>
			</svg>
		</span>
	);
}
