"use client";
import { useEffect, useState } from "react";

export default function Home() {
	const [weather, setWeather] = useState("lol");
	const [fetched, setFetched] = useState(false);
	const [search, setSearch] = useState("");

	const handleUpdate = (e: any) => {
		e.preventDefault();

		setSearch(e.target.value);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
	};

	useEffect(() => {
		fetch("https://127.0.0.1:8080/api/home").then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<div className="flex m-auto rounded-xl text-white h-96 bg-white w-72">
			<div className=" m-auto space-y-10">
				<h1 className="w-full text-black italic">
					Enter a location to get started
				</h1>
				<form onSubmit={handleSubmit}>
					<input
						className="w-full rounded-xl p-2 text-orange bg-black"
						type="text"
						value={search}
						onChange={(e) => handleUpdate(e)}
					/>
					<input type="submit" hidden />
				</form>
				<h2 className=" text-blue-500">{weather}</h2>
			</div>
		</div>
	);
}
