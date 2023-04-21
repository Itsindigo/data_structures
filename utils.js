function catchAndLog(cb) {
    try {
        return cb();
    } catch (err) {
        console.log(`Caught an error -- ${err}`);
    }
}

module.exports = {
    catchAndLog,
};
