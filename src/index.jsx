import App from "./App";

if (module.hot) {
	module.hot.accept((error) => {
		if (error) {
			console.log("host error");
		}
	});
}
