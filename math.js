function add(a,b) {
	return a+b
}
function minus(a,b) {
	return a-b
}

// exports.mult = (a,b) => a*b;
// exports.div = (a,b) => a/b;

module.exports = {
	addFn : add,
	SubFn : minus
};