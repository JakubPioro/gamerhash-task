import {createStore} from 'vuex'
import axios from "axios"

export const store = createStore({
    state() {
        return {
            logged: false,
            outside: true,
            show: false,
            form: {
                login: '',
                password: '',
                errors: {
                    login: '',
                    password: '',
                    server: ''
                }
            },
        }
    },
    mutations: {
        toggleStatus(state, payload) {
            if (payload === "button") {
                state.show = true
                state.outside = false

                setTimeout(function () {
                    if (!state.outside) {
                        state.outside = true
                    }
                }, 100);
            } else if (payload === "outside" && state.outside) {
                state.show = false
            }
        },
        close(state) {
            state.show = false
        },
        validateLogin(state, payload) {
            state.form = payload
        },
        login(state) {
            console.log("logowanie")
            state.logged = true
        },
        logout(state) {
            console.log("wylogowanie")
            state.logged = false
        },
        clearForm(state) {
            state.form = {
                login: '',
                password: '',
                errors: {
                    login: '',
                    password: ''
                }
            }
        }
    },
    actions: {
        switch({commit}, payload) {
            commit('toggleStatus', payload)
        },

        async login({commit,getters}, payload) {
            if (payload.login.length <= 8) {
                payload.errors.login = 'login must be at least 8 characters long'
            } else {
                payload.errors.login = ''
            }
            if (payload.password.length <= 8) {
                payload.errors.password = 'password must be at least 8 characters long'
            } else {
                payload.errors.password = ''
            }
            console.log(payload.errors)
            if (payload.errors.login === '' && payload.errors.password === '') {
                try {
                    const data = await axios(
                        {
                            method: 'post',
                            // url: 'http://localhost:8080/api/users/authenticate',
                            url: 'http://dom.elo/api/auth',
                            data: {
                                // username:payload.login,
                                login: payload.login,
                                password: payload.password
                            }
                        })
                    if (data.status === 200) {
                        commit('clearForm')
                        commit('close')
                        commit('login')
                        payload = getters.getForm
                        alert("Logged in :)")
                    }
                } catch (error) {
                    console.log(error)
                    payload.errors.login = 'Incorrect password or login!'
                    payload.errors.password = 'Incorrect password or login!'
                }
                commit('validateLogin', payload)
            }
        },
        logout({commit}) {
            console.log('wylogowano')
            commit('logout')
        },
    },
    getters: {
        getStatus: (state) => state.show,
        getForm: (state) => state.form,
        getLogged: (state) => state.logged
    }
})