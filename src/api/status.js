import resource from 'resource-router-middleware';

export default () => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'status',

	/** GET / - List all entities */
	index({ params }, res) {
        let data = {
			date: Date(),
			status:"Everything Right!"
		}
		res.json(data);
	},


});
