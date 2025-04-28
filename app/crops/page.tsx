export default function Detect() {
	return (
		<div>
			<div className="relative lg:h-screen">
				<h1 className="text-center my-5 text-3xl text-green-600 font-bold">
					Crop Input Form
				</h1>
				<div className="mx-auto max-w-2xl px-4">
					<div className="planting-form flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
						<h2>Get Personalized Planting Advice</h2>

						<div className="form-group">
							<label htmlFor="location">Your Location</label>
							<input
								type="text"
								className="w-full p-3 border border-gray-300 rounded-lg"
								id="location"
								placeholder="City or Address"
								aria-label="Enter your city or address"
							/>
							<small>We'll use this to determine your growing zone</small>
						</div>

						<div className="form-group">
							<label htmlFor="crop">Crop of Interest</label>
							<input
								type="text"
								className="w-full p-3 border border-gray-300 rounded-lg"
								id="location"
								placeholder="City or Address"
								aria-label="Enter your city or address"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="zone">Or Enter Your USDA Zone (Optional)</label>
							<select
								className="w-full p-3 border border-gray-300 rounded-lg"
								id="zone"
								aria-label="Select USDA zone"
							>
								<label htmlFor="">
                                    <input type="checkbox" name="Zone 1" id="" />
                                </label>
							</select>
						</div>

						<fieldset className="form-group">
							<legend>Current Weather Conditions</legend>

							<div className="weather-option">
								<input
									type="checkbox"
									id="has-frost"
									name="weather"
									value="frost"
								/>
								<label htmlFor="has-frost">
									Frost expected in next 2 weeks
								</label>
							</div>

							<div className="weather-option">
								<input
									type="checkbox"
									id="has-drought"
									name="weather"
									value="drought"
								/>
								<label htmlFor="has-drought">Currently in drought</label>
							</div>
						</fieldset>

						<button type="submit" className="px-6 py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700">
							Get Planting Recommendations
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
