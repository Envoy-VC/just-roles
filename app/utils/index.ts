export const formatFollowers = (followers: number) => {
	if (followers < 1000) {
		return followers;
	} else if (followers < 1000000) {
		return `${(followers / 1000).toFixed(1)}K`;
	} else if (followers < 1000000000) {
		return `${(followers / 1000000).toFixed(1)}M`;
	} else {
		return `${(followers / 1000000000).toFixed(1)}B`;
	}
};
