import dayjs from 'dayjs'
import toObject from 'dayjs/plugin/toObject'

dayjs.extend(toObject);

export const parseDate = (targetDate) => {
    return dayjs(targetDate).toObject()
}
