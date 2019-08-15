const db = require('../data/db-config.js');


function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes')
    .where({ id });
};

function findSteps(id) {
    //SELECT schemes.scheme_name, step_number, steps.instructions 
    //FROM steps
    //INNER JOIN schemes
    //ON steps.scheme_id = schemes.id
    //order by scheme_name, step_number
    return db('steps')
        .innerJoin('schemes', 'steps.scheme_id', 'schemes.id')
        .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .orderBy('step_number')
        .where({ scheme_id: id })
};

function add(scheme) {
    if(scheme.scheme_name) {
        return db('schemes').insert(scheme)
    } else{
        res.status(400).json({ error: 'you must include a scheme_name' });
    }
};

function update(id, changes) {
    return db('schemes')
    .where({ id })
    .update(changes)
};

function remove(id) {
    return db('schemes')
    .where({ id })
    .del();
};

function addStep(newStep, id) {
    newStep.scheme_id = id;
    if(newStep.step_number && newStep.instructions) {
        return db('steps')
    .insert(newStep)
    } else {
        res.status(400).json({ error: 'you must include a step name and step instructions' });
    }
    
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove, 
    addStep
}