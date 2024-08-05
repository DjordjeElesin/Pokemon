export default function calculateHeightPercents(stats) {
    const IV = 31;
    const EV = 252;

    const HEIGHT_PERCENTS = [];

    stats.forEach((stat, index) => {
       let MAX_STAT = Math.floor(((2 * stat.base_stat + IV + Math.floor(EV / 4) + 5) * 1.1));
       console.log("MAX STAT ", index, MAX_STAT);
       HEIGHT_PERCENTS.push(((stat.base_stat*100)/MAX_STAT).toFixed(2));
    })

    console.log("HEIGHT PERCENTS: ", HEIGHT_PERCENTS);

    return HEIGHT_PERCENTS;
}