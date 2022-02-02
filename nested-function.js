function studenstData(roll, names){
    function getData(){
        if(names){
            return names.split(' ')[1];
        }else{
            return '';
        }
    }

    var dataCollect = roll + ' ' + getData();
    console.log(dataCollect);
}
studenstData(10, "shaina Akter");