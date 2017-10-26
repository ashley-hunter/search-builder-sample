export function PageHeaderDirective() {
    return {
        restrict: 'E',
        controller: 'PageHeaderController',
        controllerAs: 'vm',
        template: require('./page-header.html')
    };
}