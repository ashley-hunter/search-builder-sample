export function PageContentDirective() {
    return {
        restrict: 'E',
        controller: 'PageContentController',
        controllerAs: 'vm',
        template: require('./page-content.html'),
        bindToController: true,
        scope: true
    };
}