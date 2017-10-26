import 'jquery';
import 'jquery-ui';
import 'bootstrap';
import 'angular';
import '@ux-aspects/ux-aspects/ng1/ux-aspects-ng1';
import './site.less';

/**
 * Import component modules
 */
import './components/page-header/page-header.module';
import './components/page-content/page-content.module';

const app = angular.module('app', ['ux-aspects', 'page-header', 'page-content']);