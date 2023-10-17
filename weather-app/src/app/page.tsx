"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { motion } from "framer";

export default function Home() {
	const [weather, setWeather] = useState<any>();
	const [fetched, setFetched] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);

	const handleUpdate = (e: any) => {
		e.preventDefault();

		setSearch(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		fetch(
			`http://localhost:8080/api/home?city=${search.toLowerCase().trim()}`
		)
			.then((res) => res.json())
			.then(setWeather);
	};

	return (
		<div className="flex m-auto rounded-xl text-white h-96  bg-white w-72">
			<div className="m-auto space-y-10">
				<h1 className="w-full text-black text-center italic">
					{!weather ? "Enter a location!" : `${weather.name}`}
				</h1>
				<form onSubmit={handleSubmit} className="flex">
					<input
						className={`transition transform ease-in-out duration-100 n m-auto rounded-xl p-2 text-orange bg-black ${
							open ? "w-full" : "w-1/2"
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
				{weather && (
					<div className="text-black flex h-52 border border-1 border-red-600">
						<h1 className="m-auto">Search to get started</h1>
					</div>
				)}
			</div>
		</div>
	);
}
