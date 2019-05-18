import { name, version } from '../package.json';
import functions from './functions';


export default {
    name: () => name,
    version,
    ...functions
};
