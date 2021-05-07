let app = new Vue({
    el: "#app",
    data: {
        list: []
    },
    methods: {
        addtodo: function () {
            let todo = document.getElementById('input').value;
            if(todo == "")return;

            this.list.push(todo);
        },
        done: function () {
            document.addEventListener('click', (e) => {
                if(e.target.id == "box") 
                {
                    e.target.style.backgroundColor = "red";
                }
            })
        }
    }

})