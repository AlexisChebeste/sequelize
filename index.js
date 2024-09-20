(async () => {
    const db = require('./models')

    //await db.sequelize.sync({force:true})

   /*  const user = await db.User.create({
         firstName: "Alexis",
         lastName: "Chebeste",
         email: "fdsafsad@gmail.com",
         disponibles: true
    }) 

    const user2 = await db.User.create({
        firstName: "Alexis",
        lastName: "Chebeste",
        email: "fdsafsad@gmail.com",
        disponibles: true
   }) 
    */
   /* const user3 = await db.User.create({
        firstName: "Juan",
        lastName: "fsdafsda",
        email: "fdsafsad@gmail.com",
        disponibles: true
    })   */

    const recuperado1 = await db.User.findByPk(3)

    /* console.log(JSON.stringify(recuperado1,null,2)) */
    // console.log(JSON.stringify(user, null, 2))

    const recu2 = await db.User.findOne({
        where:{firstName: 'Juan'}
    })
    console.log(JSON.stringify(recu2))

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
