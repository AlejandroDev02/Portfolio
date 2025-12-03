import { useState, useEffect } from 'react';

export const useGitHubProjects = (repos) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            if (!repos || repos.length === 0) {
                setLoading(false);
                return;
            }

            setLoading(true);
            // Clear previous error
            setError(null);

            try {
                const projectPromises = repos.map(async (repo) => {
                    try {
                        const response = await fetch(`https://api.github.com/repos/${repo}`);
                        if (!response.ok) {
                            console.warn(`Failed to fetch ${repo}: ${response.statusText}`);
                            return null;
                        }
                        const data = await response.json();

                        try {
                            const langResponse = await fetch(`https://api.github.com/repos/${repo}/languages`);
                            if (langResponse.ok) {
                                const languages = await langResponse.json();
                                data.languages = Object.keys(languages);
                            } else {
                                data.languages = [];
                            }
                        } catch (langErr) {
                            console.warn(`Failed to fetch languages for ${repo}`, langErr);
                            data.languages = [];
                        }

                        return data;
                    } catch (err) {
                        console.warn(`Error fetching ${repo}:`, err);
                        return null;
                    }
                });

                const results = await Promise.all(projectPromises);
                const validProjects = results.filter(project => project !== null);
                setProjects(validProjects);

                // If all failed (e.g. rate limit), validProjects will be empty.
                // We can optionally set an error if we want to show "No projects found" or similar,
                // but user requested to just hide them.

            } catch (err) {
                console.error("Unexpected error in project fetching:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [JSON.stringify(repos)]); // Depend on the array content

    return { projects, loading, error };
};
