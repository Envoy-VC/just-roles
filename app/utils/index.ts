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

export const getUserId = async (address: string) => {
	const query = `
	query getUserId {
  defaultProfile(request: {ethereumAddress: "${address}"} ) {
    id
  }
}
# Write your query or mutation here
`;
	const res = await fetch('https://api-mumbai.lens.dev', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query: query }),
	}).then((res) => res.json());
	if (res.data) {
		return res.data.defaultProfile.id;
	} else {
		return null;
	}
};
