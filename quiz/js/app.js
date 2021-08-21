var  app = new Vue({
    el:'#app',
    data:{
        message:'This is a parent component'
    }
})
Vue.component(
    'todo-footer',{
        template:'<p>This is another global child component</p>'
    }
);
new Vue({
    el:'#app',
    components:{
        'todo-list':{
            template: '<p>This is another local child component<p>'
            }
    }
});

