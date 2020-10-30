export default {
    /**
     * 保存数据
     *
     * @param {*} key 键
     * @param {*} value 值
     */
    set(key: any, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value))
    },

    /**
     * 获取数据
     *
     * @param {*} key  键
     */
    get(key: string) {
        return JSON.parse(window.localStorage.getItem(key))
    },

    /**
     * 删除数据
     *
     * @param {*} key 键
     */
    remove(key: any) {
        window.localStorage.removeItem(key)
    }
}
