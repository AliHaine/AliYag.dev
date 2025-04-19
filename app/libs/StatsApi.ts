const GITHUB_API_URL = "https://github-contributions-api.deno.dev/alihaine.json";
const GITHUB_STARS_URL = "https://api.github.com/users/alihaine/repos?per_page=100";

export const getGithubContributions = async () => {
    const res = await fetch(GITHUB_API_URL);
    const data = await res.json();
    return data.totalContributions;
};

export const getGitHubStars = async () => {
    const res = await fetch(GITHUB_STARS_URL);
    const repos = await res.json();

    return 17;
}

export const getServerRunning = async () => {
    return 87;
}

export const getWorkPosts = async () => {
    return 7;
}