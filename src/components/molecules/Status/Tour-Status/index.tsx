import React from "react";

// Define the enum
export enum TourStatusEnum {
	PROCESSING = "PROCESSING",
	PUBLISHED = "PUBLISHED",
	REJECTED = "REJECTED",
}

// Define prop types
export interface TourStatusProps {
	status: TourStatusEnum;
}

// Style based on status
const getStatusStyle = (status: TourStatusEnum): React.CSSProperties => {
	switch (status) {
		case TourStatusEnum.PROCESSING:
			return { background: "#1663CF" };
		case TourStatusEnum.PUBLISHED:
			return { background: "#008000" };
		case TourStatusEnum.REJECTED:
			return { background: "#ff0000" };
		default:
			return {};
	}
};

export default function TourStatus({ status }: TourStatusProps) {
	return (
		<span style={getStatusStyle(status)} className="tour-status">
			{status}
		</span>
	);
}
