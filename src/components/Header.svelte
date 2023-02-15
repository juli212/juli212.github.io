<script>
	import { icons } from "../common/Icons.svelte";

	const sections = ["About", "Portfolio", "Contact"];
	let clickedHash = null;

	const hashSection = (section) => {
		return `#${section.toLocaleLowerCase()}`;
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		const hash = `#${sectionId}`;
		if (!section) return;

		section.scrollIntoView({
			behavior: "smooth",
		});

		if (window.location.hash !== hash) {
			history.replaceState({}, "", hash);
		}
	};

	const handleAnchorClick = (e) => {
		e.preventDefault();
		const hash = e.currentTarget.hash;
		clickedHash = hash;
		scrollToSection(hash.slice(1));
	};

	const handleLoad = () => {
		const hash = window.location.hash;
		scrollToSection(hash.slice(1));
	};
</script>

<svelte:window on:load={handleLoad} />

<header>
	<div class="header-icons">
		<div class="header-icon">
			<a href="https://www.linkedin.com/in/juli212/" title="LinkedIn">
				<img {...icons.linkedIn} alt="Github" />
			</a>
		</div>
		<div class="header-icon">
			<a href="https://github.com/juli212" title="Github">
				<img {...icons.github} alt="LinkedIn" />
			</a>
		</div>
	</div>
	<h1>Julia Giraldi</h1>
	<ul>
		{#each sections as section}
			<li>
				<a
					class:active={clickedHash === hashSection(section)}
					href={hashSection(section)}
					on:click={handleAnchorClick}>{section}</a
				>
			</li>
		{/each}
	</ul>
</header>
