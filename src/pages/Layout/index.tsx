import { ReactElement } from "react";
import Sidebar from "../Sidebar";
import Header from "../../components/template/Header";

export default function RootLayout({ children }: { children: ReactElement }) {
	return (
		<>
			<main className="main bg-body min-h-screen">
				<div className="flex">
					<Sidebar />
					<div className="content-area w-full">
						<Header />
						<div className="content px-8 py-8">{children}</div>
					</div>
				</div>
			</main>
		</>
	);
}
