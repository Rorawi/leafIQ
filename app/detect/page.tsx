import PlantPredictor from "../../components/PlantPredictor";
import PlantModel from "../../components/PlantModel";
import TopNav from "../../components/TopNav";

export default function Detect() {
	return (
		<div>
			<div className="relative">
				<TopNav />
				<div className="flex justify-center items-center flex-col gap-3 h-screen bg-[#E8F6E9] pt-10 relative">
					<div className="absolute text-9xl opacity-10 top-16 left-1">🍃</div>
					<div className="absolute text-9xl opacity-10 bottom-0 right-1">
						🍃
					</div>
					<div className="relative z-10 px-6 md:px-12 lg:text-center gap-6 mt-5">
						<PlantPredictor />
					</div>
				</div>
			</div>
		</div>
	);
}
