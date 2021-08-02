export default (posts=[],action)=>{
    switch (action.type) {
        case 'USERNAME':
            return posts;
        case 'CREATE':
            return posts;
    
        default:
            return posts;
    }
}