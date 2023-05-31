let User = require('../models/user');

module.exports.SignIN = function(req, res){
    
        return res.render('Signin',{
                title: "home"
                // posts: posts
            })
    
}
module.exports.Signup = function(req, res){
    return res.render('Signup',{
        title: "Signup"
        // posts: posts
    })

}
module.exports.Home = function(req, res){
  return res.render('Home',{
      title: "Home"
      // posts: posts
  })

}

module.exports.create = async function(req, res) {
  console.log(req.body);

  if (req.body.password !== req.body.confrom_password) {
    return res.redirect('back');
  }

  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      await User.create({email: req.body.email, password: req.body.password, name: req.body.name});
      res.redirect('/');
    } else {
      return res.redirect('back');
    }
  } catch (err) {
    console.log('Failed to create user', err);
    return res.redirect('back');
  }
}
module.exports.createSession = async function(req, res){
  return res.redirect('/home');
}
