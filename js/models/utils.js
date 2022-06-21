export default class Utils {
    find(data, id) {
        return data.find(item => item.id == id);
    }
}