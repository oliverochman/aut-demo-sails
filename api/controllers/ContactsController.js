module.exports = {
  create: function(req,res) {
  	var params = _.extend(req.query || {}, req.params || {}, req.body || {});

  	Contact.create(params, function userCreated (err, createdContact) {

  		if (err) return res.send(err,500);

  		res.redirect();
  	});
  }
}
