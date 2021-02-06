import { Button } from "@/components/Button";

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="space-x-4">
				<Button type="button">Neutral</Button>
				<Button type="button" intent="danger">
					Danger
				</Button>
			</div>
		</div>
	);
}
