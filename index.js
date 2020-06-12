exports.optionsSchema = [
    'discipline',
    'module',
    'homework',
    'uniqueName',
    'un',   // same as uniqueName
    'id',   // same as uniqueName
    ];

exports.test = (options) => {
    console.log(JSON.stringify(options, null, 2));
};