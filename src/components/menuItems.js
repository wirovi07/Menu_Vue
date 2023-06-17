export default {
    profile: {
        name: 'Wilmar Rojas',
        onClick(){
            console.log('Hello')
        },
    },
    items:[
        {
            id: 0,
            title: 'Home',
            icon: 'fa-house-user',
            onClick(){
                console.log('Home')
            },
        },
        {
            id: 1,
            title: 'Reports',
            icon: 'fa-screwdriver-wrench',
            onClick(){
                console.log('Report')
            },
        },
        {
            id: 2,
            title: 'About',
            icon: 'fa-fire',
            onClick(){
                console.log('About')
            },
        },
    ],
};