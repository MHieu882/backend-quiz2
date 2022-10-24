
const moment = require('moment-timezone');


function findtoStartEndofMoth(date,timezone="Africa/Freetown"){
    const startOfMonth= moment(date).tz(timezone).startOf('month').format();
    const endOfMonth= moment(date).tz(timezone).endOf('month').format();
    return {
        startOfMonth,
        endOfMonth
    }

}
 
console.log(findtoStartEndofMoth(new Date('February 1, 2018 23:15:30'),'America/Toronto'));

function mtdperiod(date,timezone="Africa/Freetown"){
    const startOfMonth= moment(date).tz(timezone).startOf('month').format();
    const presentday= moment(date).tz(timezone).endOf('day').format();
    return {
        startOfMonth,
        presentday,
    }
}
console.log(mtdperiod(new Date('August 19, 1975')));

function MonSun(date,timezone="Africa/Freetown"){
    const newdate= date.setDate(date.getDate()-7);
    const MondayLw= moment(newdate).tz(timezone).startOf('week').add(1, 'day').format();
    const SundayLw= moment(newdate).tz(timezone).endOf('week').add(1, 'day').format();
    return {
        MondayLw,
        SundayLw
    }
}
console.log(MonSun(new Date('October 24, 2022'),'Asia/Ho_Chi_Minh'));// return 17-23

