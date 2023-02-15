<script context="module">
	import { icons } from '../common/Icons.svelte'
	import feetball from '../assets/feetballNYC.png'
	import kitchenin from '../assets/kitchen.png'
	import octopus from '../assets/octopus.png'

	export const projectStatuses = {
		live: 'live',
		homeless: 'homeless',
		dead: 'dead',
	}
	
	export const projectIcons = {
		feetball: feetball,
		kitchenin: kitchenin,
		pubGamer: octopus,
	}
    
	export const portfolioProjects = {
		kitchenin: {
			background: projectIcons.kitchenin,
			description: "Combined shopping list and kitchen organizer to help you stay in the loop when your housemates devour everything in the kitchen.",
			status: projectStatuses.homeless,
			title: "Kitchenin'",
			projectLinks: [
				{
					selfHosted: false,
					href: "https://github.com/juli212/kitchenin",
					icon: icons.github.src,
					title: "Kitchenin' project on Github",
				}, {
					selfHosted: true,
					href: "http://kitchenin.herokuapp.com/",
					icon: projectIcons.kitchenin,
					title: "Kitchenin live site - under maintenance - looking for a new home",
				}
			],
			tools: [icons.postgres, icons.pythonDjango, icons.htmlCssJs],
		},
		pubGamer: {
			background: projectIcons.pubGamer,
			description: "Tool for finding bars that offer games like pool, skeeball, etc. to their patrons. Users add or review venues and have the option to create events.",
			status: projectStatuses.homeless,
			title: "PubGamer",
			projectLinks: [
				{
					title: "PubGamer Frontend on Github",
					href: "https://github.com/juli212/pubgamer-client",
					selfHosted: false,
					icon: icons.github.src,
				}, {
					title: "PubGamer Backend on Github",
					href: "https://github.com/juli212/pubgamer-api",
					selfHosted: false,
					icon: icons.github.src,
				}, {
					title: "PubGamer live site - under maintenance - looking for a new home",
					href: "http://pubgamr.herokuapp.com/",
					selfHosted: true,
					icon: projectIcons.pubGamer,
				}
			],
			tools: [icons.rubyRails, icons.react, icons.postgres],
		},
		feetball: {
			background: projectIcons.feetball,
			description: "Site dedicated to the NYC Feetball community.",
			status: projectStatuses.dead,
			title: "FeetballNYC",
			projectLinks: [
				{
					title: "Feetball project on Github",
					href: "https://github.com/juli212/feetball",
					selfHosted: false,
					icon: icons.github.src,
				}, {
					title: "FeetballNYC site - no longer hosted",
					href: "http://feetball.nyc/",
					selfHosted: true,
					icon: projectIcons.feetball,
				}
			],
			tools: [icons.htmlCssJs, icons.sql],
		}
	}
</script>