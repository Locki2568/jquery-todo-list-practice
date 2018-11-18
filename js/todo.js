$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        function generateNewOrderListElement(inputValue){
            var uuid = generateUUID();
            var newLiElement = '<li id="'+uuid+'" class="listElement"><input name="done-todo" type="checkbox" class="done-todo">'+inputValue+'</li>';
            $("ol").append(newLiElement);
        }

        $("div#button").click(function(){
            var inputValue = $("input.input-text").val();
            if (inputValue.length > 0){
                generateNewOrderListElement(inputValue);
                $("input.input-text").val("");
            }
        });

        // $("input.done-todo").change(function(){
        //     //var input = $(this).val();
        //     console.log(this)
        //     console.log(this.checked)
        //     if(this.checked){
        //         $("input.done-todo").css('textDecoration', 'line-through');
        //     }
        // })

        
        $(document).on("change", ":checkbox", function () {
            if ($(this).is(':checked')) {
                $(this).parent().addClass('checked');
            } else {
                $(this).parent().removeClass('checked');
            }
        });
        
        $(".complete").click(function(){
            console.log("complete");
            this.focus();
            var listItems = $(".listElement");
            listItems.each(function( index, li ) {
                // Show all the item for condition checking
                $(this).show();
                console.log("complete.each");
                var item = $(li);
                if(!$(this).find('input').is(':checked')){
                    $(this).hide();
                }
            });
        });

        $(".active").click(function(){
            console.log("active");
            this.focus();
            var listItems = $(".listElement");
            listItems.each(function( index, li ) {
                console.log("active.each");
                // Show all the item for condition checking
                $(this).show();
                var item = $(li);
                if($(this).find('input').is(':checked')){
                    $(this).hide();
                }
            });
        });

        $(".all").click(function(){
            console.log("all");
            this.focus();
            var listItems = $(".listElement");
            listItems.each(function( index, li ) {
                console.log("all.each");
                var item = $(li);
                $(this).show();
            });
        });

        // var listItems = $("#productList li");
        // listItems.each(function(idx, li) {
        // var product = $(li);
        // });
        // // and the rest of your code

        // code to be implemented
        
    });