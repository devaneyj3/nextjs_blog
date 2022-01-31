import React from "react";

import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src="/images/me.png" alt="Jordan" width={300} height={300} />
			</div>
			<h1>Hi, I'm Jordan</h1>
			<p>
				I blog about Web Development - especially frontend libraries like React
				and frameworks.
			</p>
		</section>
	);
}
