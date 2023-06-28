<template>
	<nav class="navbar navbar-expand-sm navbar-light bg-white">
		<div class="container-fluid">
			<RouterLink to="/" class="navbar-brand">
				<img
					alt="Vue logo"
					class="logo"
					src="@/assets/logo.svg"
					width="48"
					height="48"
				/>
			</RouterLink>

			<button
				class="navbar-toggler noOutline"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse text-uppercase justify-content-end " id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item dropdown">
						<RouterLink 
							to="/"
							class="nav-link dropdown-toggle"
							aria-current="page" 
							id="navbarDropdownMenuLink" 
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Home
						</RouterLink>
							
						<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<li>
								<RouterLink to="/" class="dropdown-item">Exclusive</RouterLink>
							</li>
							<li>
								<RouterLink to="/" class="dropdown-item">Posts</RouterLink>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<RouterLink to="/about" class="nav-link">About</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/blog" class="nav-link">Blog</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/contact" class="nav-link">Contact</RouterLink>
					</li>
				</ul>
			</div>
			
		</div>
	</nav>
</template>

<style scoped lang="scss">
li {
	font-weight: 500
}

.nav-item {
	padding-inline: 0.5rem;
}

.noOutline {
	border-width: 0;
	box-shadow: none;
}
</style>
