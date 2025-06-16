import {getTotalCards} from "@/app/utils/ItemLoader";

const GITHUB_API_URL = "https://github-contributions-api.deno.dev/alihaine.json";
const GITHUB_STARS_URL = ["https://api.github.com/users/alihaine/repos?per_page=100", "https://api.github.com/users/BulPlugins/repos?per_page=100"];
const BSTATS_SERVERS_URL = "https://bstats.org/api/v1/plugins/%id%/charts/servers/data?maxElements=%max%"
const bstatsIds: number[] = [22989, 20655];
let starValue = -1;


export const getGithubContributions = async () => {
    const res = await fetch(GITHUB_API_URL);
    const data = await res.json();
    return data.totalContributions;
};

export const getGitHubStars = async () => {
    let value: number = 0;
    for (const url of GITHUB_STARS_URL) {
        const res = await fetch(url);
        if (!res.ok) {
            console.log(`Failed to fetch ${url}: ${res.statusText}`);
            return starValue;
        }

        const repos = await res.json();
        value = repos.reduce((value: number , currentData: {[key: string]: number}) => value + currentData["stargazers_count"], value);
    }
    starValue = value;
    return value;
}

export const getServerRunning = async () => {
    let value: number = 0;
    for (const id of bstatsIds) {
        const res = await getBstatsServerValues(id, 1);
        value += res.at(0).at(1);
    }
    return value;
}

export const getBstatsServerValues = async (id: number, maxElements: number) => {
    const bstatsUrlBuild = BSTATS_SERVERS_URL.replace('%id%', String(id)).replace('%max%', String(maxElements));
    const res = await fetch(bstatsUrlBuild);
    return await res.json()
}

export const getWorkPosts = async () => {
    return getTotalCards();
}