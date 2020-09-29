import 'reflect-metadata';

import Katana from '../classes/Katana';
import Shuriken from '../classes/Shuriken';

import TYPES from '../types';

const inversify = require('inversify');

inversify.decorate(inversify.injectable(), Katana);
inversify.decorate(inversify.injectable(), Shuriken);

const container = new inversify.Container();

container.bind(TYPES.Katana).to(Katana);
container.bind(TYPES.Shuriken).to(Shuriken);

export default container;
