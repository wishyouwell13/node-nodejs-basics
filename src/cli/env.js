const parseEnv = () => {
  const result = [];
  for (const [envKey, envValue] of Object.entries(process.env)) {
    if (/^RSS_/.test(envKey)) {
      const str = `${envKey}=${envValue}`;
      result.push(str);
    }
  }
  console.log(result.join('; '));
};

parseEnv();
