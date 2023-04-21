function catchAndLog(cb) {
    try {
        cb();
    } catch (err) {
        console.log(`Caught an error: ${err}`);
    }
}

module.exports = {
    catchAndLog,
};
