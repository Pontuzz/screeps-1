'use strict';

function parseFlag(flag) {
    var parameters = AI.parseCommand(flag.name);

    if (flag.memory &&
        flag.memory.handler !== undefined &&
        flag.memory.handler in AI.extensions.commands
    ) {
        AI.extensions.commands[flag.memory.handler].exec(flag, parameters);
        return;
    }

    if (parameters[0] in AI.extensions.commands) {
        AI.extensions.commands[parameters[0]].exec(flag, parameters);
    }
}

function preController() {
    for (var flag in Game.flags) {
        parseFlag(Game.flags[flag]);
    }
}

function postController() {

}

module.exports = {
    preController: preController,
    postController: postController,
    test: {
        parseFlag: parseFlag
    }
};
