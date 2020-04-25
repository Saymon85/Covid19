// Utility function for formatting date needed for API call, format need YYYY-MM-DD

export const formatDate = (date) => {
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    const year = date.getFullYear();

    day = day.length === 1 ? '0' + day : day;
    month = month.length === 1 ? '0' + month : month;

    return `${year}-${month}-${day}`;
}

/* remove unnecessary data from response data array because there is more than one object for one day, last object from result data for that date is the most relevant */

export const removeItems = (arr, numOfDays) => {
    const filteredArray = arr.filter((item, i) => {
        if(i < arr.length - 1){
            return item.day === arr[i+1].day ? false : true;
         }else{
             return true;
         }
    }).filter((item, i) => {
        if(numOfDays){
            return i < numOfDays;
        }else{
            return item;
        }
    }).reverse();

    return filteredArray;
}