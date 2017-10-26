export class PageContentController {

    constructor($scope) {

        this.searchVisible = true;
        this.$scope = $scope;
        this.query = {};

        // set up search builder components
        this.components = [{
                name: 'keyword',
                templateUrl: require('!!file-loader!./search/keyword-component.html')
            },
            {
                name: 'repository',
                templateUrl: require('!!file-loader!./search/repository-component.html')
            }
        ];

        // set up some filter data
        this.keywords = [{
                name: 'Pending'
            },
            {
                name: 'In Progress'
            },
            {
                name: 'Completed'
            }
        ];

        this.repositories = [{
                name: 'Sharepoint'
            },
            {
                name: 'File System'
            },
            {
                name: 'Records Manager'
            }
        ];

    }

    addKeyword(keyword) {

        // ensure there is a keyword object
        if (!this.query.hasOwnProperty('keywords')) {
            this.query.keywords = {};
        }

        // add the keyword to the list
        this.query.keywords[`keyword${Math.floor(Math.random() * 99999)}`] = {
            component: 'keyword',
            value: keyword.name
        };


        /**
         * Workaround
         */
        this.searchVisible = false;
        setTimeout(() => {
            this.searchVisible = true;
            this.$scope.$digest();
        });

    }

    removeKeyword(keyword) {

        for (const prop in this.query.keywords) {
            const component = this.query.keywords[prop];

            if (component.value === keyword.name) {
                delete this.query.keywords[prop];
            }
        }

        /**
         * Workaround
         */
        this.searchVisible = false;
        setTimeout(() => {
            this.searchVisible = true;
            this.$scope.$digest();
        });
    }

    addRepository(repository) {

        // ensure there is a keyword object
        if (!this.query.hasOwnProperty('repositories')) {
            this.query.repositories = {};
        }

        // add the keyword to the list
        this.query.repositories[`repositories${Math.floor(Math.random() * 99999)}`] = {
            component: 'repository',
            value: repository.name
        };


        /**
         * Workaround
         */
        this.searchVisible = false;
        setTimeout(() => {
            this.searchVisible = true;
            this.$scope.$digest();
        });
    }

    removeRepository(repository) {

        for (const prop in this.query.repositories) {
            const component = this.query.repositories[prop];

            if (component.value === repository.name) {
                delete this.query.repositories[prop];
            }
        }

        /**
         * Workaround
         */
        this.searchVisible = false;
        setTimeout(() => {
            this.searchVisible = true;
            this.$scope.$digest();
        });
    }

    addKeywordField() {
        return {
            id: `keyword${Math.floor(Math.random() * 99999)}`,
            component: 'keyword'
        };
    }

    addRepositoryField() {
        return {
            id: `repository${Math.floor(Math.random() * 99999)}`,
            component: 'repository'
        };
    }

    clearAll() {
        this.keywords.forEach(keyword => this.removeKeyword(keyword));
        this.repositories.forEach(repository => this.removeRepository(repository));
    }
}

PageContentController.$inject = ['$scope'];