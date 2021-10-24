// window.$ = window.jQuery = require('jquery');
// import * as $ from 'jquery';

import {$,jQuery} from 'jquery';
window.$ = $;
window.jQuery = jQuery;
export default $;
export { jQuery };


import '@popperjs/core';
import 'bootstrap';
import 'bootstrap/js/dist/dropdown';


console.log("Responsive ...")