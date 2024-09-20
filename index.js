(async () => {
    const db = require('./models')

    await db.sequelize.sync({force:true})

    const user = await db.User.create({
         firstName: "Alexis",
         lastName: "Chebeste",
         email: "alebi@gmail.com",
         disponibles: true
    }) 

    const user2 = await db.User.create({
        firstName: "Nicolas",
        lastName: "Olivera",
        email: "nico@gmail.com",
        disponibles: true
   }) 
   
   const user3 = await db.User.create({
        firstName: "Juan",
        lastName: "Britez",
        email: "juan@gmail.com",
        disponibles: true
    })  

    const recu1 = await db.User.findByPk(3)

    console.log(JSON.stringify(recu1,null,2)) 
    // console.log(JSON.stringify(user, null, 2))

    const recu2 = await db.User.findOne({
        where:{firstName: 'Juan'}
    })
    console.log(JSON.stringify(recu2,null,2))

    const recu3 = await db.User.findAll({
        where:{firstName: 'Juan'}
    })
    console.log(JSON.stringify(recu3, null, 2))



    const recu5 = await db.User.destroy({
        where: {firstName: 'Juan'}
    })

    console.log(recu5)

    const recuUpdate = await db.User.findByPk(2)
    recuUpdate.email = 'zaraza'
    recuUpdate.save()


})()
