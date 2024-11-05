import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	Row,
	HeaderGroup,
	Cell,
} from "@tanstack/react-table";

interface DynamicTableProps<T> {
	columns: ColumnDef<T, any>[];
	data: T[];
}

function DynamicTable<T extends object>({
	columns,
	data,
}: DynamicTableProps<T>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row: Row<T>) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell: Cell<T, unknown>) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default DynamicTable;
