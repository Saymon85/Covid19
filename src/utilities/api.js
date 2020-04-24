// I will use few API because they provide different data that I need to build this project

// COVID-19 found on RapidAPI - this API provides some more data so I can build table similar to one on WHO web site

export const statisticsAPI = 'https://covid-193.p.rapidapi.com/statistics';
export const historyAPI = 'https://covid-193.p.rapidapi.com/history?';
export const covid19Headers = {
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "iKqIAcWaYNmshfqAv2EyqtNpe9HYp1o82OPjsnk2aWv2ESth6W"
    }
    
}

// API from Mohammad Mustadi which provides some global stats and nice daily stats for graphs

export const globalStatsAPI = 'https://covid19.mathdro.id/api';
export const dailyStatsAPI = 'https://covid19.mathdro.id/api/daily';


// API provided by Corona virus monitor from rapid API by Aleh Stsiatsko

/* export const historyByCountryAPI = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=';
export const historyByDateAPI = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country=';
export const historyAPIHeaders = {
    headers: {
		  "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		  "x-rapidapi-key": "iKqIAcWaYNmshfqAv2EyqtNpe9HYp1o82OPjsnk2aWv2ESth6W"
	}
} */
