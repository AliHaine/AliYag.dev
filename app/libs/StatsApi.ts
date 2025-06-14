import {getTotalCards} from "@/app/libs/ItemLoader";

const GITHUB_API_URL = "https://github-contributions-api.deno.dev/alihaine.json";
const GITHUB_STARS_URL = ["https://api.github.com/users/alihaine/repos?per_page=100", "https://api.github.com/users/BulPlugins/repos?per_page=100"];


export const getGithubContributions = async () => {
    const res = await fetch(GITHUB_API_URL);
    const data = await res.json();
    return data.totalContributions;
};

export const getGitHubStars = async () => {
    let value: number = 0;
    for (const url of GITHUB_STARS_URL) {
        const res = await fetch(url);
        const repos = await res.json();
        return;
        value = repos.reduce((value: number , currentData: {[key: string]: number}) => value + currentData["stargazers_count"], value);
    }
    return value;
}

export const getServerRunning = async () => {
    return 87;
}

export const getWorkPosts = async () => {
    return getTotalCards();
}