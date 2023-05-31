let Student = require('../models/student')

module.exports.Studentpage =  function(req, res){
    

    return res.render('Student', {
        title: "student create"
    })
}

module.exports.Studentcreate = async function(req, res) {
    try{
        let student = await Student.findOne({ email: req.body.email });
        if(!student){
                await Student.create(req.body);
                return res.redirect('/home');         
        }else{
            return res.redirect('back');
        }
    }catch(err){
       console.log(err);
       return res.redirect('back');
    }
}
