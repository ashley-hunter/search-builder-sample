export class PageHeaderController {

    constructor($rootScope, $state) {

        this.currentState = null;
        this.previousState = null;
        this.topSearchExpanded = false;
        this.versionName = "UX Aspects Angular Version";

        this.heading = 'Search Builder Demo';

        $rootScope.$on('$viewContentLoaded', () => {

            // get the name of the current state
            this.currentState = $state.current.name;
        });

        $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState) => {
            this.previousState = fromState.name;
        });
    }

    expandTopSearch(value) {
        vm.topSearchExpanded = value;
    }

    goBack() {

        if (vm.currentState === 'detailview' && vm.previousState) {
            // if current state is detail view then go back to list view
            $state.go(vm.previousState);
        } else {
            // otherwise go back to the showcase page
            window.location.href = vm.sourceUrl;
        }
    }

}

PageHeaderController.$inject = ['$rootScope', '$state'];