class UsersListController {
	constructor() {
		this.users = [{
			id: 1,
			name: 'John Doe'
		}, {
			id: 2,
			name: 'Jane Doe'
		}];
    }
}

const usersList = {
    controller: UsersListController,
    template: `
        <h2>Users</h2>
        <hr>
        <ol>
            <li ng-repeat="user in $ctrl.users">{{ user.name }}</li>
        </ol>
    `
};

export default usersList;