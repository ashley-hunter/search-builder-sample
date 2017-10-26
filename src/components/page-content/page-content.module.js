import { PageContentController } from './page-content.controller';
import { PageContentDirective } from './page-content.directive';

angular.module('page-content', [])
    .directive('pageContent', PageContentDirective)
    .controller('PageContentController', PageContentController);