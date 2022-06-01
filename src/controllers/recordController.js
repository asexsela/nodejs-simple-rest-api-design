const recordService = require('../services/recordService')

const getRecordForWorkout = (req, res) => {
    try {
        const { params: { workoutId } } = req

        if (!workoutId) {
            throw {
                status: 400,
                message: 'Not found'
            }
        }

        const records = recordService.getRecordForWorkout(workoutId)

        res.send({
            status: 'OK',
            data: records
        })

    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: {
                error: error?.message || error
            }
        })
    }
}

module.exports = {
    getRecordForWorkout
}