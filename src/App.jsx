import React from "react";
import ReactDom from "react-dom";

const App = () => {
	return (
		<div>
			<h1>React hao1 haha</h1>
		</div>
	);
};

export default App;

let [a, b = "nihao"] = [1, null];

console.log("a is " + a);
console.log("b is " + b);

ReactDom.render(<App />, document.getElementById("app"));

let { foo, bar } = { foo: "技术胖1" };
console.log(foo + bar);

function jspang(first, ...arg) {
	for (let val of arg) {
		console.log(val);
	}
}

jspang(0, 1, 2, 3, 4, 5, 6, 7);
