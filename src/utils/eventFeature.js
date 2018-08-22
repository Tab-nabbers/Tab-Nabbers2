

module.exports = {

    filterNum: (events, num) => {
        const filterEvents = events.slice(0, num);
        const result = filterEvents.sort((a, b) => {
            return b.capacity - a.capacity;
        });

        return result;
    },
};