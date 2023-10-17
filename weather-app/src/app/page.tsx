"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { motion } from "framer";
import { timezoneFunction } from "../../tech_functions/timezoneFunction";
import Skeleton from "@mui/material/Skeleton";
import TemperatureComponent from "../../components/TemperatureComponent";

export default function Home() {
	const [weather, setWeather] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);

	const handleUpdate = (e: any) => {
		e.preventDefault();

		setSearch(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setLoading(true);
		fetch(
			`http://localhost:8080/api/home?city=${search.toLowerCase().trim()}`
		)
			.then((res) => res.json())
			.then(setWeather)
			.then(() => {
				setSearch("");
				setLoading(false);
			})
			.catch((err) => {
				alert("Error occured:\n" + err);
			});
	};

	return (
		<div className="flex m-auto rounded-xl text-white h-96  bg-white min-w-min p-5 w-2/5">
			<div className="m-auto w-full space-y-10">
				<h1 className="w-full text-black text-center italic">
					BetterWeather
				</h1>
				<form onSubmit={handleSubmit} className="flex">
					<input
						className={` transition-width ease-in-out duration-200 m-auto p-2 text-orange bg-black ${
							open || search.length !== 0
								? "rounded-xl w-full"
								: "rounded-full w-2/5"
						}`}
						type="text"
						value={search}
						onFocus={() => setOpen(true)}
						onBlur={() => setOpen(false)}
						placeholder={open ? "Search here" : ""}
						onChange={(e) => handleUpdate(e)}
					/>
					<input type="submit" hidden />
				</form>
				{loading ? (
					<div className="text-black flex h-52 ">
						<div className="w-full">
							<Skeleton
								variant="text"
								className="bg-gray-dark text-4xl rounded-xl"
							/>
							<Skeleton
								variant="text"
								className="bg-gray-dark text-2xl rounded-xl"
							/>
							<Skeleton
								variant="rectangular"
								className="bg-gray-dark h-3/5 rounded-xl"
							/>
						</div>
					</div>
				) : (
					weather && (
						<div className="text-black h-52">
							<div className="w-full flex items-baseline">
								<div className="w-2/3">
									<h1
										className={`text-${
											weather.name.length > 14
												? "2xl"
												: weather.name.length > 12
												? "3xl"
												: "4xl"
										}`}
									>
										{weather.name}
									</h1>
									<h2>
										{timezoneFunction(weather.timezone)}
									</h2>
								</div>
								<div className="w-1/3 m-auto">
									<h2 className="text-4xl">
										{Math.round(weather.main.temp - 273)}
										&deg;
									</h2>
								</div>
							</div>
							<div className="flex w-full">
								<TemperatureComponent tempComp={weather.main} />
							</div>
							<div className="">
								<p className="text-sm text-center">
									temperature values are being shown in
									celcius
								</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}
