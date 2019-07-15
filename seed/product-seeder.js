let dbconfig=require('../dbconfig/db-connect');

dbconfig.connect(function (error) {
    if(error){
        console.log('DB Connection err');
        process.exit(1);
    }else{
        console.log('connected successfully');


dbconfig.get().collection('product').insertMany([{
    imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title:'Gothic Video Game',
    description:'Awesome game',
    price:'$20'
},{
    imagePath:'https://upload.wikimedia.org/wikipedia/it/thumb/5/50/Mario_Nintendo.png/193px-Mario_Nintendo.png',
    title:'Super Mario Game',
    description:'Thrilling Game',
    price:'$15'
},{
    imagePath:'https://scontent.fcok2-1.fna.fbcdn.net/v/t1.0-1/p200x200/22196443_538758743129709_7771628892419728851_n.png?_nc_cat=111&_nc_oc=AQkr6E49BprqXv21KSHw2lOIQoe4cevyEQfYlAWkB6ID7buGsbRk7CIDuzB62kQdl2fOq4xKCDEdZKNt1-0vxuPQ&_nc_ht=scontent.fcok2-1.fna&oh=1d8be2e8551e41e6e00265606a50bf1f&oe=5DC46D4D',
    title:'Candy Crush',
    description:'Interesting game',
    price:'$30'
},

    {
        imagePath:'https://www.xda-developers.com/files/2018/06/pubg.jpg',
        title:'Pubg',
        description:'Thrilling Game',
        price:'$40'
    },


    {
        imagePath:'https://cdn2.unrealengine.com/Fortnite%2Fbattle-pass%2Fseason-9%2F09BP_Web_BattlePassPage_Social_01-1920x1080-1d4466959aad0f5070b582a39d5d518384d3a39a.jpg',
        title:'Fortnite',
        description:'Interesting one',
        price:'$80'
    }, {
        imagePath: 'https://upload.wikimedia.org/wikipedia/it/thumb/5/50/Mario_Nintendo.png/193px-Mario_Nintendo.png',
        title: 'Super Mario Game',
        description: 'Thrilling Game',
        price: '$15'
    }
])
    }

});