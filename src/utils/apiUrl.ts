const BACKEND_ENV_VAR = process.env.BACKEND_ENV;

const apiUrl = (path: string) => {
    console.log(path);
    if (BACKEND_ENV_VAR === "production") {
        console.log("production");
        return `https://renovation-estimator.netlify.app/api/${path}`;
    } else {
        return `http://localhost:3000/api/${path}`;
    }
};

export default apiUrl;
