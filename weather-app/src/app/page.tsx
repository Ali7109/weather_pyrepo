"use client";
import { useEffect, useState } from "react";
import ViewPage from "./view/page";

export default function Home() {
	const [background, setBackground] = useState<string>("");

	return (
		<div className="h-full w-full flex bg-center bg-contain">
			<ViewPage setBackground={setBackground} />
		</div>
	);
}
