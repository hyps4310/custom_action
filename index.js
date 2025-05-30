import * as core from '@actions/core';

const name = core.getInput('name');
const ouput_value = `Hello ${name} from custom action!`;
core.setOutput('greeting', ouput_value);