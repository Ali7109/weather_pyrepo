import { styled } from "@mui/material";
import React from "react";

type TempComp = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
};
type TempProps = {
	tempComp: TempComp;
};

const TempCont = styled("div")({
	textAlign: "center",
	backgroundColor: "black",
	margin: "20px",
	borderRadius: 10,
	padding: "5px 0px",
	boxShadow: "0px 5px 10px gray",
	color: "white",
});
const TemperatureComponent = ({ tempComp }: TempProps) => {
	return (
		<>
			<TempCont className="w-full text-center ">
				<h2 className="text-2xl">
					{Math.round(tempComp.temp_min - 273)}&deg;
				</h2>
				<h3>low</h3>
			</TempCont>
			<TempCont className="w-full text-center ">
				<h2 className="text-2xl">
					{Math.round(tempComp.feels_like - 273)}&deg;
				</h2>
				<h3>real feel</h3>
			</TempCont>
			<TempCont className="w-full text-center">
				<h2 className="text-2xl">
					{Math.round(tempComp.temp_max - 273)}&deg;
				</h2>
				<h3>high</h3>
			</TempCont>
		</>
	);
};

export default TemperatureComponent;
