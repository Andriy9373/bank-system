import store from "@/store";

export default {
    install(app: any, options: any) {
        app.config.globalProperties.$i18n = (key: string) => {
            return options[store.state.language][key];
        }
    }
}