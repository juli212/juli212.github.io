<script>
	import { portfolioProjects, projectStatuses } from '@/constants/Project.svelte'

	const getProjectStatusClass = (status) => {
		return projectStatuses[status] || ""
	}
</script>

<div id="portfolio" class="main three portfolio">
	<h2>Portfolio</h2>

	<div class='project-box'>

		{#each Object.values(portfolioProjects) as project}
    	<button
				class={`project taphover ${getProjectStatusClass(project.status)}`}
				style="--background: url({project.background});"
			>
        <div class='content'>

					<div class='project-title'>
						<h6>{project.title}</h6>
					</div>

					<div class='project-description taphover'>
						<p>{project.description}</p>
					</div>

					<div class="project-icons">
						{#each project.projectLinks as projectLink}
							<div class={`project-icon${projectLink.selfHosted ? " site" : ""}`}>
								<a
									class="taphover"
									href={project.status === projectStatuses.live || !projectLink.selfHosted ? projectLink.href : 'javascript: void(0)'}
									target="_blank"
									title={projectLink.title}
									rel="noreferrer"
								>
									<img src={projectLink.icon} alt="">
								</a>
							</div>
						{/each}
					</div>

					<div class="project-bottom-icons">
						{#each project.tools as toolIcon}
							<div class="bottom-icon">
								<img title={toolIcon.title} src={toolIcon.src} alt={toolIcon.title} />
							</div>
						{/each}
					</div>

        </div>
	    </button>
		{/each}

	</div> 
</div>