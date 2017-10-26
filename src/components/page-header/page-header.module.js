import { PageHeaderController } from './page-header.controller';
import { PageHeaderDirective } from './page-header.directive';

angular.module('page-header', [])
    .directive('pageHeader', PageHeaderDirective)
    .controller('PageHeaderController', PageHeaderController);