require('dotenv').config();

const envVars: Record<string, string | number | undefined> = {
	BOT_TOKEN: process.env.TOKEN,
	CLIENT_ID: '1010998154533027872',
	GUILD_ID: '176353424093347840',
};

const config: Record<string, string> = {};
Object.keys(envVars).forEach((key) => {
	if (envVars[key] === undefined) throw new Error(`${key} undefined`);
	config[key] = envVars[key] as string;
});

export { config };
