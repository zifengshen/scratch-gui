const UPDATE_TOOLBOX = 'scratch-gui/toolbox/UPDATE_TOOLBOX';


const {getSpriteToolbox, getStageToolbox, getSpeechToolbox, getWedoToolbox} = require('../lib/toolbox-xml');

const initialState = {
    currentToolbox: getSpriteToolbox()
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case UPDATE_TOOLBOX:
        return Object.assign({}, state, {
            currentToolbox: action.toolbox
        });
    default:
        return state;
    }
};

reducer.updateToolbox = function (toolbox) {
    return {
        type: UPDATE_TOOLBOX,
        toolbox: toolbox
    };
};

reducer.setSpriteToolbox = function () {
    return reducer.updateToolbox(getSpriteToolbox());
};
reducer.setStageToolbox = function () {
    return reducer.updateToolbox(getStageToolbox());
};
reducer.setSpeechToolbox = function () {
    return reducer.updateToolbox(getSpeechToolbox());
};
reducer.setWedoToolbox = function () {
    return reducer.updateToolbox(getWedoToolbox());
};

module.exports = reducer;
