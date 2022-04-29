import Vue from 'vue';
import Vuex from 'vuex';
import {nanoid} from 'nanoid';
Vue.use(Vuex);

const actions = {
    addBook(context, value) {
        context.commit('ADDBOOK',value);
    }
};
const mutations = {
    ADDBOOK(state,value) {
        const oldBooks = JSON.parse(state.books);
        const newBooks = JSON.stringify(oldBooks.push(value));
        localStorage.setItem('books', newBooks)
        state.books = newBooks;
    }
};
const state = {
    books: JSON.stringify([
        {id:nanoid(),title:'ES6标准入门（第3版）',classify: 'JavaScript',total:6,borrowedNo:2,borrower:[{userId:1,name:'李可'},{userId:2,name:'马特尔'}],publishTime:'2017-09-01',ISBN:'9787121324758',pageNo:576,edition:3,publisher:'电子工业出版社',author:'阮一峰',desc: '剖析ES理解应用难题，横跨ES2015/2016/2017新标，抢占JavaScript制高点' },
        {id:nanoid(),title:'JavaScript高级程序设计（第4版）',classify: 'JavaScript',total:3,borrowedNo:0,borrower:[],publishTime:'2020-09-01',ISBN:'9787115545381',pageNo:866,edition:4,publisher:'人民邮电出版社',author:'[美] 马特·弗里斯比（Matt Frisbie）',desc: `web前端开发教程，JS"红宝书"升级，入门+实战，涵盖ECMAScript，2019，提供教学视频+配套编程环境，可直接在线运行随书代码.web前端开发教程，JS"红宝书"升级，入门+实战，涵盖ECMAScript，2019，提供教学视频+配套编程环境，可直接在线运行随书代码` },
        {id:nanoid(),title:'css新世界',classify: 'css',total:1,borrowedNo:0,borrower:[],publishTime:'2021-07-01',ISBN:'9787115562845',pageNo:596,edition:1,publisher:'人民邮电出版社',author:'张鑫旭',desc: `CSS3.0入门到进阶教程，前端博客"鑫空间-鑫生活"博主十年经验沉淀之作，大量实战案例且具有在线Demo演示` },
        {id:nanoid(),title:'深入浅出React和Redux',classify: '前端框架',total:4,borrowedNo:1,borrower:[{userId:3,name:'刘小娟'}],publishTime:'2017-05-01',ISBN:'9787111565635',pageNo:259,edition:1,publisher:'机械工业出版社',author:'程墨',desc: `由浅入深介绍如何用React和Redux构建前端项目，产出高质量易维护代码` },
    ])
};

export default new Vuex.Store({
    actions,
    mutations,
    state
})