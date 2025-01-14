
const moment = require('moment-timezone');


function findtoStartEndofMoth(date,timezone="Africa/Freetown"){
    if(date.getDate()==1){
        date=moment(date).add(1,'day')
    }
    const startOfMonth= moment(date).tz(timezone).startOf('month').format();
    const endOfMonth= moment(date).tz(timezone).endOf('month').format();
    return {
        startOfMonth,
        endOfMonth
    }
}
console.log(findtoStartEndofMoth(new Date('October 1, 2022'),'Asia/Ho_Chi_Minh'));

function mtdperiod(date,timezone="Africa/Freetown"){
    // if(date.getDate()==1 && timezone!='Asia/...'){
    //     date=moment(date).add(1,'day')
    // }
    const startOfMonth= moment(date).tz(timezone).startOf('month').format();
    const presentday= moment(date).tz(timezone).endOf('day').format();
    return {
        startOfMonth,
        presentday
    }
}
console.log(mtdperiod(new Date('October 1, 2022'),'Asia/Ho_Chi_Minh'));

function MonSun(date,timezone="Africa/Freetown"){
    const newdate= date.setDate(date.getDate()-7);
    const MondayLw= moment(newdate).tz(timezone).startOf('week').add(1, 'day').format();
    const SundayLw= moment(newdate).tz(timezone).endOf('week').add(1, 'day').format();
    return {
        MondayLw,
        SundayLw
    }
}
console.log(MonSun(new Date('October 1, 2022'),'Asia/Ho_Chi_Minh'));// return 17-23

