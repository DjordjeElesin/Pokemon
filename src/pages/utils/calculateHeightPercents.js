export default function calculateHeightPercents(stats) {
    const IV = 31;
    const EV = 252;

    const HEIGHT_PERCENTS = [];

    stats.forEach((stat, index) => {
        if(index === 0){
            console.log("This is hp stat")
            let MAX_HP =  Math.floor((2 * stat.base_stat + IV + Math.floor(EV / 4) + 110));
            HEIGHT_PERCENTS.push(Math.floor((stat.base_stat*100)/MAX_HP))
        }else{
            let MAX_STAT = Math.floor(((2 * stat.base_stat + IV + Math.floor(EV / 4) + 5) * 1.1));
            HEIGHT_PERCENTS.push(Math.floor((stat.base_stat*100)/MAX_STAT));
        }
    })

    console.log("HEIGHT PERCENTS: ", HEIGHT_PERCENTS);

    return HEIGHT_PERCENTS;

    /* if(isHp) {
        return Math.floor((2 * baseStat + IV + Math.floor(EV / 4) + 110));
    }else{
        return Math.floor(((2 * baseStat + IV + Math.floor(EV / 4) + 5) * 1.1));
    } */
}