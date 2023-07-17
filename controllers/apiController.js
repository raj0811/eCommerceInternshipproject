module.exports.home =  async(req,res) =>{
    return res.send('hii')
}

module.exports.login =  async(req,res) =>{
    const {username, password}  =  req.body
}

