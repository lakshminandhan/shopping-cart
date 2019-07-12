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
    imagePath:'https://upload.wikimedia.org/wikipedia/it/thumb/5/50/Mario_Nintendo.png/193px-Mario_Nintendo.png',
    title:'Fornite Game',
    description:'adventures game',
    price:'$30'
},{
    imagePath:'https://upload.wikimedia.org/wikipedia/it/thumb/5/50/Mario_Nintendo.png/193px-Mario_Nintendo.png',
    title:'Gothic Video Game',
    description:'good one',
    price:'$30'
},
    {
        imagePath:'https://upload.wikimedia.org/wikipedia/it/thumb/5/50/Mario_Nintendo.png/193px-Mario_Nintendo.png',
        title:'Gothic Video Game',
        description:'good one',
        price:'$20'
    }
])
    }

});