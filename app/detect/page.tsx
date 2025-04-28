import TopNav from "../../components/TopNav";
import PlantDetector from "../../components/PlantDetector";
export default function Detect() {
	return (
		<div>
			<div className="relative lg:h-screen">
				<TopNav />
				<div className="pt-20 lg:pt-30 relative lg:h-screen">
					<div className="absolute text-9xl opacity-10 top-16 left-1">🍃</div>
					<div className="absolute text-9xl opacity-10 bottom-4 right-0">
						🍃
					</div>
					<div className="relative z-10 px-6 md:px-12 lg:text-center gap-6 h-full">
						<PlantDetector />
					</div>
				</div>
			</div>
		</div>
	);
}
