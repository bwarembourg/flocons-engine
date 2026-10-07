class SaveManager {
    static set(key, value) {
        let saveState = SaveManager.globalGet();
        saveState[key] = value;
        SaveManager.globalSave(saveState);
    }

    static get(key) {
        let saveState = SaveManager.globalGet();
        return saveState[key];
    }

    static globalGet() {
        const ls = window.localStorage.getItem('flocons-save');
        if (ls && ls != 'undefined') {
            return JSON.parse(ls);
        }
        return {};
    }

    static globalSave(saveState) {
        if (saveState)
            window.localStorage.setItem('flocons-save', JSON.stringify(saveState));
    }
}